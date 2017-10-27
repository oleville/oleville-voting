import Sequelize from 'sequelize'
import moment from 'moment'
import getToken from './getToken'
import models from '../models'
import {ADMIN_USERGROUP_ID} from '../config'

export default async function setUserInfo(req) {
	if (req.get('Authorization')) {
		let userToken = getToken(req)

		let userData
		try {
			userData = await models.User.findOne({
				where: {
					authToken: userToken
				},
				include: [
					{
						model: models.UserGroupMembership,
						include: [
							{
								model: models.UserGroup
							}
						]
					}
				]
			})
		} catch (err) {
			console.log('Error getting current user from database: ' + err)
		}

		if (!userData) {
			return req
		}

		// simplify list of user's groups
		userData.isAdmin = false
		let userGroups = []
		userData.dataValues.UserGroupMemberships.forEach((ug) => {
			let id = ug.UserGroup.dataValues.id
			let name = ug.UserGroup.dataValues.name
			userGroups.push({
				id: id,
				name: name
			})
			// while we're here, may as well check if the user is an admin
			if (id === ADMIN_USERGROUP_ID) {
				userData.isAdmin = true
			}
		})
		userData.userGroups = userGroups

		if (userData.authToken && userData.authToken == userToken && moment(userData.tokenExpiration) > moment()) {
			// this is a valid user with a non-expired token, so set some data on their request and return it
			req.user = userData // attach the user to the req
			return req
		} else {
			// for some reason this user is not valid, so just return the req object
			return req
		}
	} else {
		return req
	}
}
