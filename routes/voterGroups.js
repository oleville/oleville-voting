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
		name: req.query.name
	})
	.then(() => {
		res.sendStatus(201) // Created
	})
	.error(() => {
		res.sendStatus(500) // Internal server error
	})
})

router.patch('/:vgId', (req, res) => {
	models.VoterGroup.find({
		where: {
			id: req.params.vgId
		}
	})
	.then((vg) => {
		if (!vg) {
			res.sendStatus(404)
			return
		}
		vg.name = req.query.name || vg.name
		vg.save().then(() => {
			res.sendStatus(202)
		})
	})
	.error(() => {
		res.sendStatus(500)
	})
})

router.delete('/:vgId', (req, res) => {
	models.VoterGroup.destroy({
		where: {
			id: req.params.vgId
		}
	})
	.then(() => {
		res.sendStatus(202)
	})
	.error(() => {
		res.sendStatus(500)
	})
})

module.exports = router
