import models from '../models'
import userIsAdmin from '../lib/userIsAdmin'
import express from 'express'

const router = express.Router()

// all /user routes should be admin restricted
router.use((req, res, next) => {
	if (!userIsAdmin(req)) {
		res.sendStatus(403)
	} else {
		next()
	}
})

router.get('/:userId?', (req, res) => {
	if (req.params.userId) {
		models.User.findAll({
			where: {
				id: req.params.userId,
				electionId: req.electionId
			}
		})
		.then((user) => {
			console.log(user)
			res.send(user)
		})
	} else {
		models.User.findAll({
			where: {
				electionId: req.electionId
			}
		})
		.then((user) => {
			console.log(user)
			res.send(user)
		})
	}
	})

router.post('/', (req, res) => {
	if (Object.keys(req.query).length !== 0) {
		models.User.create({
			name: req.query.name,
			electionId: req.electionId
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
