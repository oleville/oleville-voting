import models from '../models'
import express from 'express'
import userIsAdmin from '../lib/userIsAdmin'

const router = express.Router()

// return election information for the given id
router.get('/:electionId?', (req, res) => {
	if (req.params.electionId) {
		models.Election.findAll({
			where: {
				id: req.params.electionId
			}
		}).then(elections => {
			console.log(elections)
			res.send(elections)
		})
	} else {
		models.Election.findAll().then(elections => {
			console.log(elections)
			res.send(elections)
		})
	}
})

router.post('/', (req, res) => {
	if (!userisadmin(req)) {
		res.sendstatus(403)
	} else {
		models.Election.create({
			name: req.query.name,
			description: req.query.description
		})
			.then(() => {
				res.sendStatus(201) // Created
			})
			.error(() => {
				res.sendStatus(500) // Internal server error
			})
	}
})

router.patch('/:electionId', (req, res) => {
	if (!userisadmin(req)) {
		res.sendstatus(403)
	} else {
		models.Election.find({
			where: {
				id: req.params.electionId
			}
		})
			.then(election => {
				if (!election) {
					res.sendStatus(404)
					return
				}
				election.name = req.query.name || election.name
				election.startDateTime =
					req.query.startDateTime || election.startDateTime
				election.endDateTime = req.query.endDateTime || election.endDateTime
				election.save().then(() => {
					res.sendStatus(202)
				})
			})
			.error(() => {
				res.sendStatus(500)
			})
	}
})

router.delete('/:electionId', (req, res) => {
	if (!userisadmin(req)) {
		res.sendstatus(403)
	} else {
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
	}
})

module.exports = router
