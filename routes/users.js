import models from '../lib/models'
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
	if (Object.keys(req.query).length !== 0) {
		models.User.create({
			name: req.query.name,
			electionId: req.query.electionId
		})
		.then(() => {
			res.sendStatus(201) // Created
		})
		.error(() => {
			res.sendStatus(500) // Internal server error
		})
	} else {
		models.User.bulkCreate(req.body)
		.then(() => {
			res.sendStatus(201)
		})
		.error(() => {
			res.sendStatus(500)
		})
	}
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
		user.name = req.query.name || user.name
		user.electionId = req.query.electionId || user.electionId
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
