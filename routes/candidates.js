import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
	models.Candidate.findAll({})
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
