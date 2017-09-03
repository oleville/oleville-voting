import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/:candidateId?', (req, res) => {
	models.Candidate.findAll({
		where: {
			id: (req.params.candidateId == null) ? '*' : req.params.candidateId
		}
	})
	.then((candidates) => {
		console.log(candidates)
		res.send(candidates)
	})
})

router.post('/', (req, res) => {
	models.Candidate.create({
		name: req.query.name,
		description: req.query.description,
		electionId: req.query.electionId,
		positionId: req.query.positionId
	})
	.then(() => {
		res.sendStatus(201) // Created
	})
	.error(() => {
		res.sendStatus(500) // Internal server error
	})
})

router.patch('/:candidateId', (req, res) => {
	models.Candidate.find({
		where: {
			id: req.params.candidateId
		}
	})
	.then((candidate) => {
		if (!candidate) {
			res.sendStatus(404)
			return
		}
		candidate.name = req.query.name || candidate.name
		candidate.description = req.query.description || candidate.description
		candidate.electionId = req.query.electionId || candidate.electionId
		candidate.positionId = req.query.positionId || candidate.positionId
		candidate.save().then(() => {
			res.sendStatus(202)
		})
	})
	.error(() => {
		res.sendStatus(500)
	})
})

router.delete('/:candidateId', (req, res) => {
	models.Candidate.destroy({
		where: {
			id: req.params.candidateId
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
