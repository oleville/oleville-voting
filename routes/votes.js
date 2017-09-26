import models from '../models'
import userIsAdmin from '../lib/userIsAdmin'
import express from 'express'

const router = express.Router()

router.get('/:voteId?', (req, res) => {
	if (!userIsAdmin(req)) {
		res.sendStatus(403)
	} else {
		if (req.params.voteId == null) {
			models.Vote.findAll()
			.then((vote) => {
				console.log(vote)
				res.send(vote)
			})
		} else {
			models.Vote.findAll({
				where: {
					id: req.params.voteId
				}
			})
			.then((vote) => {
				console.log(vote)
				res.send(vote)
			})
		}
	}
})

router.post('/', (req, res) => {
	if (Object.keys(req.query).length !== 0) {
		// there is not request body, assume that the data is in the query string
		models.Vote.create({
			candidateId: req.query.candidateId,
			userId: req.query.userId,
			electionId: req.query.electionId,
			positionId: req.query.positionId
		})
		.then(() => {
			res.sendStatus(201) // Created
		})
		.error(() => {
			res.sendStatus(500) // Internal server error
		})
	} else {
		// there is a request body. Use it as the source of data.
		models.Vote.bulkCreate(req.body)
		.then(() => {
			res.sendStatus(201)
		})
		.error(() => {
			res.sendStatus(500)
		})
	}
})

// Intentionally omitted update, as votes should never be updated. Users
// are not allowed to change their ballots after submission.

router.delete('/:voteId', (req, res) => {
	if (!userIsAdmin(req)) {
		res.sendStatus(403)
	} else {
		models.Vote.destroy({
			where: {
				id: req.params.voteId
			}
		})
		.then(() => {
			res.sendStatus(202)
		})
		.error(() => {
			res.sendStatus(500)
		})
	}
})

module.exports = router
