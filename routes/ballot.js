import models from '../models'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
	// check that the user requesting is logged in
	if (!req.user) {
		res.sendStatus(401) // the user is not logged in
		return
	}

	if (!req.election.isOpen) {
		// the election is not open now. Reject request.
		res.sendStatus(403) // forbidden
		return
	}

	let candidates = await models.User.findAll({
		where: {
			authToken: req.user.authToken
		},
		include: [
			{
				model: models.UserGroupMembership,
				include: [
					{
						model: models.UserGroup,
						include: [
							{
								model: models.Position,
								include: [
									{
										model: models.Candidate
									}
								]
							}
						]
					}
				]
			}
		]
	})

	let returnJson = []
	candidates[0].UserGroupMemberships.forEach((group) => {
		group.UserGroup.Positions.forEach((position) => {
			returnJson.push(position)
		})
	})
	res.send(returnJson)
})

router.post('/', async (req, res) => {
	// check that the user POSTing is logged in
	if (!req.user) {
		res.sendStatus(401) // the user is not logged in
		return
	}

	if (!req.election.isOpen) {
		// the election is not open now. Reject request.
		res.sendStatus(403) // forbidden
		return
	}

	if (req.body) {
		let ballot = req.body
		let votePromises = [] // collect all the promises for inserting the data
		ballot.forEach((vote) => {
			votePromises.push(models.Vote.create({ // add a promise to the array for each of the votes
				rank: (req.election.isRankChoice) ? vote.rank : 1, // if the election is rank choice, the user needs to tell us the rank of this vote
				UserId: req.user.id,
				ElectionId: req.electionId,
				PositionId: vote.positionId,
				CandidateId: vote.candidateId
			})
			.error(() => {
				res.sendStatus(500)
				return
			}))
		})

		await Promise.all(votePromises) // wait for all the votes to be inserted
		res.sendStatus(201) // created the votes
	} else {
		// no body, no ballot. send error
		res.sendStatus(400)
	}
})

module.exports = router
