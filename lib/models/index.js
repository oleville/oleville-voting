import Sequelize from 'sequelize'
import path from 'path'
import fs from 'fs'
import {dbUsername, dbPassword, dbHost} from '../../env.js'

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


let db = {}

fs.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !=='index.js')
	})
	.forEach(file => {
		let model = sequelize.import(path.join(__dirname, file))
		db[model.name] = model
	})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

