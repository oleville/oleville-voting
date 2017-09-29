import models from '../models'
import userIsAdmin from '../lib/userIsAdmin'
import express from 'express'

const router = express.Router()

// all /userGroup routes should be admin restricted
router.use((req, res, next) => {
	if (!userIsAdmin(req)) {
		res.sendStatus(403)
	} else {
		next()
	}
})

router.get('/:userGroupId', (req, res) => {
	if (req.params.userGroupId) {
		models.UserGroup.findAll({
			where: {
				id: req.params.userGroupId,
				electionId: req.electionId
			}
		})
		.then((vg) => {
			console.log(vg)
			res.send(vg)
		})
	} else {
		models.UserGroup.findAll({
			where: {
				electionId: req.electionId
			}
		})
		.then((vg) => {
			console.log(vg)
			res.send(vg)
		})
	}
})

router.post('/', (req, res) => {
	models.UserGroup.create({
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
