import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/:candidateId?', (req, res) => {
	models.Candidate.findAll({
		where: {
			id: (req.params.candidateId == null) ? '*' : req.params.candidateId
		}
	})
	.then((candidates) => {
		console.log(candidates)
		res.send(candidates)
	})
})

router.post('/', (req, res) => {

})

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router
