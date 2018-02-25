import models from '../models'
import express from 'express'

const router = express.Router()

// return election information for the given id
router.get('/', (req, res) => {
	let response = {}
	Promise.all([
		models.User.findAll().then(r => response.users = r),
		models.UserGroup.findAll().then(r => response.userGroups = r),
		models.UserGroupMembership.findAll().then(r => response.userGroupMembership = r),
	]).then(() => res.send(response))
})

module.exports = router
