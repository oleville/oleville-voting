import moment from 'moment'
import sequelize from 'sequelize'
import models from '../models'
import { CURRENT_ELECTION_INFORMATION_TIMEOUT } from '../config'

export default async function getCurrentElectionInfo(currentElectionInfo) {
	console.log('Seconds since refresh: ' + Math.abs(currentElectionInfo.checked.diff(moment(), 'seconds')))
	if (currentElectionInfo.isStale || Math.abs(currentElectionInfo.checked.diff(moment(), 'seconds')) >= CURRENT_ELECTION_INFORMATION_TIMEOUT) {
		// this info is stale. We need to get new info.
		// finds an election that is happening now
		console.log('info is stale. Getting new info.')
		let res
		try {
			res = await models.Election.findOne({
				where: {
					startDateTime: {
						lt: moment()
					},
					endDateTime: {
						gt: moment()
					}
				}
			})
		} catch (err) {
			console.log('Error getting current election info: ' + err)
			return currentElectionInfo
		}

		if (res) {
			console.log('got an election going on now, using that')
			currentElectionInfo.id = res.id
			currentElectionInfo.isStale = false
			currentElectionInfo.checked = moment()
			currentElectionInfo.isRankChoice = res.isRankChoice
			currentElectionInfo.isOpen = true
			return currentElectionInfo
		} else {
			// the above query did not return anything. Make a new one for a future election.
			console.log('no election going on now, looking for upcoming election')
			let res
			try {
				res = await models.Election.findOne({
					order: sequelize.fn('min', sequelize.col('startDateTime')),
					where: {
						startDateTime: {
							gt: moment()
						}
					}
				})
			} catch (err) {
				console.log('Error getting future election info: ' + err)
				return currentElectionInfo
			}

			if (res) {
				console.log('found an upcoming election')
				currentElectionInfo.id = res.dataValues.id
				currentElectionInfo.isStale = false
				currentElectionInfo.checked = moment()
				currentElectionInfo.isRankChoice = res.isRankChoice
				currentElectionInfo.isOpen = false
				return currentElectionInfo
			} else {
				// there is no upcoming or currently active election.
				console.log('did not find an upcoming election')
				currentElectionInfo.id = -1
				currentElectionInfo.isStale = true
				currentElectionInfo.checked = moment()
				currentElectionInfo.isRankChoice = false
				currentElectionInfo.isOpen = false
				return currentElectionInfo
			}
		}
	} else {
		console.log('info is current')
		return currentElectionInfo
	}
}
