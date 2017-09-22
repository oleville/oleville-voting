import { CLIENT_ID } from '../config'
import express from 'express'
import moment from 'moment'
import models from '../models'
import qs from 'query-string'
import userIsAuthenticated from '../lib/userIsAuthenticated'
import fetch from 'node-fetch'

const router = express.Router()

const getToken = (tokString) => {
	let tok = tokString.match('\"(.+)\"')[1]
	return tok
}

router.post('/google', async (req, res) => {
		let token = getToken(req.get('Authorization'))
		let response = await fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?' + qs.stringify({
			id_token: token
		}))
		if (response.ok) {
			let json = await response.json()

			// verify some stuff
			if (json.aud !== CLIENT_ID) {
				// This is not a token for our app. Error!
				console.log('not a client id match')
				res.sendStatus(403)
				return
			}
			if (json.hd !== 'stolaf.edu') {
				// not an ole.
				console.log('not a domain match')
				res.sendStatus(403)
				return
			}

			// put the token and expiration into the db
			await models.User.update({
					authToken: token, // this has just been verified with google, so we trust it
					tokenExpiration: moment.unix(json.exp) // this comes from google, so we trust it
				}, {
					where: {
						email: json.email
					}
				}
			)
		}
		res.sendStatus(200)
})

module.exports = router
