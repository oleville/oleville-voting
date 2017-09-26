import getToken from './getToken'
import models from '../models'

export default async function setUserInfo(req) {
	if (req.get('Authorization')) {
		let userToken = getToken(req)
		let userData = await models.User.findOne({
			where: {
				authToken: userToken
			}
		})
		if (data.authToken && data.authToken == userToken && moment(data.tokenExpiration) > moment()) {
			// this is a valid user with a non-expired token, so set some data on their request and return it
			req.user = data
			return req
		} else {
			// for some reason this user is not valid, so just return the req object
			return req
		}
	} else {
		return req
	}
}

