import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
	models.User.findall({})
	.then((user) => {
		console.log(user)
		res.send(user)
	})
})

router.post('/', (req, res) => {

})

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router
