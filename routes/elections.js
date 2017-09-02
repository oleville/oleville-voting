import models from '../lib/models'
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

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})


module.exports = router
