import models from '../models'

export default function verifySub(subString, email) {
	console.log('verifying sub')
	models.User.findOne({
			where: {
				email: email
			}
	})
	.then((data) => {
		if (data.googleId && data.googleId == subString) {
			return true
		} else {
			if (!data.googleId) {
				// add the sub to the database
				data.googleId = parseInt(subString)
				data.save().then(() => {
					return true
				})
				.error(() => {
					return false
				})
			}
		}
		return false
	})
	.error(() => {
		console.log('Error verifying user sub.')
		return false
	})
}
