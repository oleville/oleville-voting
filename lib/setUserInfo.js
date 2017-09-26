import Sequelize from 'sequelize'
import getToken from './getToken'
import models from '../models'

export default async function setUserInfo(req) {
	console.log('setUserInfo')
	if (req.get('Authorization')) {
		let userToken = getToken(req)
		console.log('got the token in setuserinfo')

		let userData
		try {
			userData = await models.User.findOne({
				where: {
					authToken: userToken
				},
				include: [
					{
						model: models.UserGroupMembership,
						as: 'user',
						// where: {
							// userId: Sequelize.col('User.id')
						// },
						include: [
							{
								model: models.UserGroup,
								as: 'userGroup',
								// where: {
									// id: Sequelize.col('UserGroupMembership.userGroupId')
								// }
							}
						]
					}
				]
			})
		} catch (err) {
			console.log('Error getting current user from database: ' + err)
		}

		if (userData.authToken && userData.authToken == userToken && moment(userData.tokenExpiration) > moment()) {
			// this is a valid user with a non-expired token, so set some data on their request and return it
			req.user = userData
			return req
		} else {
			// for some reason this user is not valid, so just return the req object
			return req
		}
	} else {
		return req
	}
}
