import models from '../models'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
	let candidates = await models.User.findAll({
		where: {
			authToken: req.user.authToken
		},
		include: [
			{
				model: models.UserGroupMembership,
				include: [
					{
						model: models.UserGroup,
						include: [
							{
								model: models.Position,
								include: [
									{
										model: models.Candidate
									}
								]
							}
						]
					}
				]
			}
		]
	})

	let returnJson = []
	candidates[0].UserGroupMemberships.forEach((group) => {
		group.UserGroup.Positions.forEach((position) => {
			returnJson.push(position)
		})
	})
	res.send(returnJson)
})

router.post('/', (req, res) => {

})

module.exports = router
