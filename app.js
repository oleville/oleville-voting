import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { CLIENT_ID, CLIENT_SECRET, SESSION_SECRET } from './config.js'
import models from './models'
import moment from 'moment'
import setUserInfo from './lib/setUserInfo'
import refreshCurrentElectionInfo from './lib/refreshCurrentElectionInfo'

const elections = require('./routes/elections')
const candidates = require('./routes/candidates')
const positions = require('./routes/positions')
const users = require('./routes/users')
const userGroups = require('./routes/userGroups')
const votes = require('./routes/votes')
const login = require('./routes/login')
const ballot = require('./routes/ballot')

const app = express()

let currentElectionInfo = {
	id: -1,
	checked: moment(),
	isStale: true
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Add headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})

// election middleware
app.use(async (req, res, next) => {
	if (req.body.electionId) {
		req.electionId = req.body.electionId
		console.log('already has id in body')
		next() // there is a electionId in the body already, we don't need to add one
		return
	}
	if (req.query.electionId) {
		req.electionId = req.query.electionId
		console.log('already has id in query')
		next()
		return
	}
	if (req.params.electionId) {
		req.electionId = req.params.electionId
		console.log('already has id in params')
		next()
		return
	}
	currentElectionInfo = await refreshCurrentElectionInfo(currentElectionInfo)
	console.log(currentElectionInfo)
	req.electionId = currentElectionInfo.id
	req.election = currentElectionInfo
	next()
	return
})

// authentication middleware
app.use(async (req, res, next) => {
	// if the user is trying to log in, then we don't care what their status is
	if (req.originalUrl.includes('login')) {
		next()
	}

	// if the user's authentication header is set, we can get their information and add it to the req object
	req = await setUserInfo(req)
	next()
})

// Plural routes
app.use('/elections', elections)
app.use('/candidates', candidates)
app.use('/positions', positions)
app.use('/users', users)
app.use('/userGroups', userGroups)
app.use('/votes', votes)
app.use('/ballots', ballot)

// Singular routes
app.use('/election', elections)
app.use('/candidate', candidates)
app.use('/position', positions)
app.use('/user', users)
app.use('/userGroup', userGroups)
app.use('/vote', votes)
app.use('/ballot', ballot)

app.use('/login', login)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
})

module.exports = app

app.listen(4000)
