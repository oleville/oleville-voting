import models from '../models'
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

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router
