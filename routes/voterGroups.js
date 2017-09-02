import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/:voterGroupId', (req, res) => {
	models.VoterGroup.findAll({
		where: {
			id: (req.params.voterGroupId == null) ? '*' : req.params.voterGroupId
		}
	})
	.then((vg) => {
		console.log(vg)
		res.send(vg)
	})
})

router.post('/', (req, res) => {
	models.VoterGroup.create({
		name: req.body.name
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
