import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/:positionId?', (req, res) => {
	models.Position.findAll({
		where: {
			id: (req.params.positionId == null) ? '*' : req.params.positionId
		}
	})
	.then((position) => {
		console.log(position)
		res.send(position)
	})
})

router.post('/', (req, res) => {

})

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router
