import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/:voterId?', (req, res) => {
	models.Voter.findAll({
		where: {
			id: (req.params.voterId == null) ? '*' : req.params.voterId
		}
	})
	.then((voter) => {
		console.log(voter)
		res.send(voter)
	})
})

router.post('/', (req, res) => {
	models.Voter.create({
		name: req.query.name,
		electionId: req.query.electionId
	})
	.then(() => {
		res.sendStatus(201) // Created
	})
	.error(() => {
		res.sendStatus(500) // Internal server error
	})
})

router.patch('/:voterId', (req, res) => {
	models.Voter.find({
		where: {
			id: req.params.voterId
		}
	})
	.then((voter) => {
		if (!voter) {
			res.sendStatus(404)
			return
		}
		voter.name = req.query.name || voter.name
		voter.electionId = req.query.electionId || voter.electionId
		voter.save().then(() => {
			res.sendStatus(202)
		})
	})
	.error(() => {
		res.sendStatus(500)
	})
})

router.delete('/:voterId', (req, res) => {
	models.Voter.destroy({
		where: {
			id: req.params.voterId
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
