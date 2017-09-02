import models from '../lib/models'
import express from 'express'

const router = express.Router()

// return election information for the given id
router.get('/', (req, res) => {
	models.Election.findAll({})
	.then((elections) => {
		console.log(elections)
		res.send(elections)
	})

})

module.exports = router
