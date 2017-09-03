import models from '../models'
import express from 'express'

const router = express.Router()

// return election information for the given id
router.get('/:electionId?', (req, res) => {
	models.Election.findAll({
		where: {
			id: (req.params.electionId == null) ? '*' : req.params.electionId
		}
	})
	.then((elections) => {
		console.log(elections)
		res.send(elections)
	})

})

router.post('/', (req, res) => {
	models.Election.create({
		name: req.body.name,
		description: req.body.description
	})
	.then(() => {
		res.sendStatus(201) // Created
	})
	.error(() => {
		res.sendStatus(500) // Internal server error
	})
})

router.patch('/:electionId', (req, res) => {
	models.Election.find({
		where: {
			id: req.params.electionId
		}
	})
	.then((election) => {
		if (!election) {
			res.sendStatus(404)
			return
		}
		election.name = req.body.name || election.name
		election.startDateTime = req.body.startDateTime || election.startDateTime
		election.endDateTime = req.body.endDateTime || election.endDateTime
		election.save().then(() => {
			res.sendStatus(202)
		})
	})
	.error(() => {
		res.sendStatus(500)
	})
})

router.delete('/:electionId', (req, res) => {
	models.Election.destroy({
		where: {
			id: req.params.electionId
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
