import models from '../models'

export default function userIsAuthenticated(email, token, electionId) {
	models.User.findOne({
		where: {
			email: email,
			electionId: electionId
		}
	})
		.then(data => {
			if (
				data.authToken &&
				data.authToken == token &&
				moment(data.tokenExpiration) > moment()
			) {
				return true
			} else {
				return false
			}
		})
		.error(() => {
			console.log(
				'Error checking authentication status for user with email:' + email
			)
			return false
		})
}
