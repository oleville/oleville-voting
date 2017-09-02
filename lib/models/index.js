import Sequelize from 'sequelize'
import path from 'path'
import fs from 'fs'
import {dbUsername, dbPassword, dbHost, dbPort} from '../../env.js'

// Make a database connection
const sequelize = new Sequelize('OlevilleVoting', dbUsername, dbPassword, {
	host: dbHost,
	dialect: 'mysql',
	port: dbPort || 3306,
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
let modelNames = []

// Get all the database table files from the files in this directory
fs.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !=='index.js')
	})
	.forEach(file => {
		let model = sequelize.import(path.join(__dirname, file))
		db[model.name] = model
		model.sync({force: false})
		modelNames.push(model.name)
	})


modelNames.forEach(modelName => {
	if (db[modelName].associate) { // if this function exists
		db[modelName].associate(db) // call it
		db[modelName].sync({alter: true}) // and re-sync the table
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

