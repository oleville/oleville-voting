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

// Get all the database table files from the files in this directory
fs.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !=='index.js')
	})
	.forEach(file => {
		let model = sequelize.import(path.join(__dirname, file))
		model.sync({force: false})
		db[model.name] = model
	})

console.log(db)
// db.forEach(model => {
	// console.log("creating table: ", model.getTableName())
	// model.sync({force: false})
// })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

