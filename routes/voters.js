import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
	models.Voter.findAll({})
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
