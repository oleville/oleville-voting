import models from '../models'
import express from 'express'

const router = express.Router()

router.get('/:userId?', (req, res) => {
	models.User.findAll({
		where: {
			id: (req.params.userId == null) ? '*' : req.params.userId
		}
	})
	.then((user) => {
		console.log(user)
		res.send(user)
	})
})

router.post('/', (req, res) => {
	models.User.create({
		name: req.body.name,
		electionId: req.body.electionId
	})
	.then(() => {
		res.sendStatus(201) // Created
	})
	.error(() => {
		res.sendStatus(500) // Internal server error
	})
})

router.patch('/:userId', (req, res) => {
	models.User.find({
		where: {
			id: req.params.userId
		}
	})
	.then((user) => {
		if (!user) {
			res.sendStatus(404)
			return
		}
		user.name = req.body.name || user.name
		user.electionId = req.body.electionId || user.electionId
		user.save().then(() => {
			res.sendStatus(202)
		})
	})
	.error(() => {
		res.sendStatus(500)
	})
})

router.delete('/:userId', (req, res) => {
	models.User.destroy({
		where: {
			id: req.params.userId
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
