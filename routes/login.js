import CLIENT_ID from '../config'
import express from 'express'
import models from '../models'
import qs from 'query-string'
import verifySub from ''

const router = express.Router()

const getToken = (tokString) => {
	let tok = tokString.match('\"(.+)\"')[1]
	return tok
}

router.post('/google', (req, res) => {
		fetch('https://www.googleapis.com/oauth2/v3/' + qs.stringify({
			id_token: getToken(req.get('Authorization'))
		}))
		.then((googleObj) => {
			// verify some stuff
			if (googleObj.aud !== CLIENT_ID) {
				// This is not a token for our app. Error!
				res.sendStatus(403)
				return
			}
			if (googleObj.hd !== 'stolaf.edu') {
				// not an ole.
				res.sendStatus(403)
				return
			}
			// Put the sub into the DB if it's not there, if it is, make sure it is the same
			verifySub(googleObj.sub)

		})
		.error(() => {
			res.sendStatus(500)
		})
	}
)

module.exports = router
