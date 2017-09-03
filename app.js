import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const elections = require('./routes/elections')
const candidates = require('./routes/candidates')
const positions = require('./routes/positions')
const users = require('./routes/users')
const voterGroups = require('./routes/voterGroups')
const voters = require('./routes/voters')
const votes = require('./routes/votes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Plural routes
app.use('/elections', elections)
app.use('/candidates', candidates)
app.use('/positions', positions)
app.use('/users', users)
app.use('/voterGroups', voterGroups)
app.use('/voters', voters)
app.use('/votes', votes)

// Singular routes
app.use('/election', elections)
app.use('/candidate', candidates)
app.use('/position', positions)
app.use('/user', users)
app.use('/voterGroup', voterGroups)
app.use('/voter', voters)
app.use('/vote', votes)


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

app.listen(3000)
