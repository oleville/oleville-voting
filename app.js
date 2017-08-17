import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import Sequelize from 'sequelize'
import {dbUsername, dbPassword, dbHost} from './env.js'

const index = require('./routes/index')
const users = require('./routes/users')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', index)
app.use('/users', users)

// Make a database connection
const sequelize = new Sequelize('OlevilleVoting', dbUsername, dbPassword, {
	host: dbHost,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
})
// Test DB connection
sequelize.authenticate()
	.then(() => {
		console.log('Connected to database')
	})
	.catch(err => {
		console.error('Error connecting to database: ', err)
	})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
});

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
