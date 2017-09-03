import Sequelize from 'sequelize'
import path from 'path'
import fs from 'fs'

let env = process.env.NODE_ENV || 'development'
let config = require(path.join(__dirname, '..', 'config', 'config.json'))
config = config[env]

const sequelize = new Sequelize(config.database, config.username, config.password, config)

sequelize.authenticate().then(() => {
	console.log('Connected to database')
}).catch(err => {
	console.error('Error connecting to database: ', err)
})

let db = {}
let modelNames = []

fs.readdirSync(__dirname).filter(file => {
	return (file.indexOf('.') !== 0) && (file !== 'index.js')
}).forEach(file => {
	let model = sequelize.import(path.join(__dirname, file))
	db[model.name] = model
	modelNames.push(model.name)
})

modelNames.forEach(modelName => {
	if(db[modelName].associate) {
		console.log(`Calling associations for model ${modelName}`)
		db[modelName].associate(db)
	}
})

sequelize.sync()

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
