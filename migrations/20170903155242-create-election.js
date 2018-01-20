'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Election', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			startDateTime: {
				type: Sequelize.DATE
			},
			endDateTime: {
				type: Sequelize.DATE
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Election')
	}
}
