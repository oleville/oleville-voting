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

})

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router
