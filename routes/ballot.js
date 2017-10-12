import models from '../models'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
	let candidates = await models.User.findAll({
		where: {
			authToken: 1
		},
		include: [
			{
				model: models.UserGroupMembership,
				as: 'user'
			}
		]
	})
	res.send(candidates)
})

router.post('/', (req, res) => {

})

module.exports = router
