import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
	models.Vote.findall({})
	.then((vote) => {
		console.log(vote)
		res.send(vote)
	})
})

router.post('/', (req, res) => {

})

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router
