import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/:positionId?', (req, res) => {
	models.Position.findAll({
		where: {
			id: (req.params.positionId == null) ? '*' : req.params.positionId
		}
	})
	.then((position) => {
		console.log(position)
		res.send(position)
	})
})

router.post('/', (req, res) => {
	models.Position.create({
		name: req.body.name,
		description: req.body.description,
		electionId: req.body.electionId
	})
	.then(() => {
		res.sendStatus(201) // Created
	})
	.error(() => {
		res.sendStatus(500) // Internal server error
	})
})

router.patch('/:positionId', (req, res) => {
	models.Position.find({
		where: {
			id: req.params.positionId
		}
	})
	.then((pos) => {
		if (!pos) {
			res.sendStatus(404)
			return
		}
		pos.name = req.body.name || pos.name
		pos.description = req.body.description || pos.description
		pos.electionId = req.body.electionId || pos.electionId
		pos.save().then(() => {
			res.sendStatus(202)
		})
	})
	.error(() => {
		res.sendStatus(500)
	})
})

router.delete('/:positionId', (req, res) => {
	models.Position.destroy({
		where: {
			id: req.params.positionId
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
