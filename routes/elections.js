import models from '../lib/models'
import express from 'express'

const router = express.Router()

// return election information for the given id
router.get('/:electionId', (req, res) => {
	console.log('got request for elections')

	models.Election.findAll({
		where: {
			id: req.params.electionId
		}
	})
	.then((elections) => {
		console.log(elections)
		res.send(elections)
	})

})

module.exports = router
