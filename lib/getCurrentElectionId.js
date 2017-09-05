import models from '../models'

let getCurrentElectionId = () => {
	// finds an election that is happening now
	return models.Election.findOne({
		where: {
			startDateTime: {
				lt: Date()
			},
			endDateTime: {
				gt: Date()
			}
		}
	})
}

/*
	.then((queryResult) => {
		if (queryResult) {
			// there is an election happening now. Return it's id.
			console.log('Current election id: ' + queryResult.id)
		} else {
			// finds the next upcoming election
			models.Election.findOne({
				order: sequelize.fn('min', sequelize.col('startDateTime'))
				where: {
					startDateTime: {
						gt: Date()
					}
				}
		})
		.then((result) => {
			if (result) {
			console.log('Next election id: ' + result.id)
			} else {
				// there is no upcoming election. Return -1.
				return -1
		})
		.error(() => {
			console.log('Error finding an upcoming election')
			return -1
		})
	})
	.error(() => {
		console.log('Error getting current election')
		return -1
	})
}
*/

export default getCurrentElectionId

