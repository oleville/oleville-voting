import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { CLIENT_ID, CLIENT_SECRET, SESSION_SECRET } from './config.js'
import models from './models'
import getCurrentElectionId from './lib/getCurrentElectionId'

const Strategy = require('passport-google-oauth').Strategy
const elections = require('./routes/elections')
const candidates = require('./routes/candidates')
const positions = require('./routes/positions')
const users = require('./routes/users')
const userGroups = require('./routes/userGroups')
const votes = require('./routes/votes')
const login = require('./routes/login')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Add headers
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
	res.setHeader('Access-Control-Allow-Credentials', true)

// election middleware
app.use((req, res, next) => {
	if (req.body.electionId) {
		return // there is a electionId in the body already, we don't need to add one
	}
	if (req.query.electionId) {
		req.body.electionId = req.query.electionId
		return
	}
	if (req.params.electionId) {
		req.body.electionId = req.params.electionId
		return
	}
	req.body.electionId = getCurrentElectionId()
	next()
})

// Plural routes
app.use('/elections', elections)
app.use('/candidates', candidates)
app.use('/positions', positions)
app.use('/users', users)
app.use('/userGroups', userGroups)
app.use('/votes', votes)

// Singular routes
app.use('/election', elections)
app.use('/candidate', candidates)
app.use('/position', positions)
app.use('/user', users)
app.use('/userGroup', userGroups)
app.use('/vote', votes)

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
