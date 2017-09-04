import models from '../models'

export default function verifySub(subString, username) {
	models.User.findOne({
			where: {
				username: username
			}
	})
	.then((data) => {
		console.log('got from table: ' + data)
		if (data.googleId && data.googleId == subString) {
			return true
		} else {
			if (!data.googleId) {
				// add the sub to the database
				data.googleId = parseInt(subString)
				data.save().then(() => {
					return true
				})
			}
		}
		return false
	})
	.error(() => {
		console.log(`Error verifying user's sub.`)
		return false
	})

}
