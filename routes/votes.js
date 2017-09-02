import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/:voteId?', (req, res) => {
	models.Vote.findall({
		id: (req.params.voteId == null) ? '*' : req.params.voteId
	})
	.then((vote) => {
		console.log(vote)
		res.send(vote)
	})
})

router.post('/', (req, res) => {
	models.Voter.create({
		candidateId: req.body.candidateId,
		voterId: req.body.voterId,
		electionId: req.body.electionId,
		positionId: req.body.positionId
	})
	.then(() => {
		res.sendStatus(201) // Created
	})
	.error(() => {
		res.sendStatus(500) // Internal server error
	})
})

router.patch('/', (req, res) => {

})

router.delete('/:voteId', (req, res) => {
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

})

module.exports = router
