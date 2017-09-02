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

router.patch('/', (req, res) => {

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
