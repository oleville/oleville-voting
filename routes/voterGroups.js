import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
	models.VoterGroup.findAll({})
	.then((vg) => {
		console.log(vg)
		res.send(vg)
	})
})

router.post('/', (req, res) => {

})

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router
