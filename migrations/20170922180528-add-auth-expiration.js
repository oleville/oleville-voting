'use strict'

module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.addColumn('User', 'tokenExpiration', Sequelize.DATE)
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.removeColumn('User', 'tokenExpiration')
	}
}
