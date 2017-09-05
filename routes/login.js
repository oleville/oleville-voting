import { CLIENT_ID } from '../config'
import express from 'express'
import models from '../models'
import qs from 'query-string'
import verifySub from '../lib/verifySub'
import fetch from 'node-fetch'

const router = express.Router()

const getToken = (tokString) => {
	let tok = tokString.match('\"(.+)\"')[1]
	return tok
}

router.post('/google', (req, res) => {
		let token = getToken(req.get('Authorization'))
		fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?' + qs.stringify({
			id_token: token
		}))
		.then((response) => {
			if (response.ok) {
				response.json()
				.then((json) => {
					let googleObj = json
					// verify some stuff
					if (googleObj.aud !== CLIENT_ID) {
						// This is not a token for our app. Error!
						console.log('not a client id match')
						res.sendStatus(403)
						return
					}
					if (googleObj.hd !== 'stolaf.edu') {
						// not an ole.
						console.log('not a domain match')
						res.sendStatus(403)
						return
					}
					// Put the sub into the DB if it's not there, if it is, make sure it is the same
					if (verifySub(googleObj.sub, googleObj.email)) {
						res.sendStatus(200)
					} else {
						res.sendStatus(403)
					}
				})
				.error((err) => {
					console.log('Error parsing JSON')
					res.sendStatus(500)
				})
			}
		})
		.error((err) => {
			console.log('error sending verification request to google')
			res.sendStatus(500)
		})
	}
)

module.exports = router
