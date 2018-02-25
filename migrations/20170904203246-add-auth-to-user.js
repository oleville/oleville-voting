'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.addColumn('User', 'authToken', Sequelize.STRING(2048))
	},

	down: (queryInterface, Sequelize) => {
		queryInterface.removeColumn('User', 'authToken')
	}
}
