import models from '../models'
import express from 'express'

const router = express.Router()

router.get('/:userGroupId', (req, res) => {
	models.UserGroup.findAll({
		where: {
			id: (req.params.userGroupId == null) ? '*' : req.params.userGroupId
		}
	})
	.then((vg) => {
		console.log(vg)
		res.send(vg)
	})
})

router.post('/', (req, res) => {
	models.UserGroup.create({
		name: req.body.name
	})
	.then(() => {
		res.sendStatus(201) // Created
	})
	.error(() => {
		res.sendStatus(500) // Internal server error
	})
})

router.patch('/:vgId', (req, res) => {
	models.UserGroup.find({
		where: {
			id: req.params.vgId
		}
	})
	.then((vg) => {
		if (!vg) {
			res.sendStatus(404)
			return
		}
		vg.name = req.body.name || vg.name
		vg.save().then(() => {
			res.sendStatus(202)
		})
	})
	.error(() => {
		res.sendStatus(500)
	})
})

router.delete('/:vgId', (req, res) => {
	models.UserGroup.destroy({
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
