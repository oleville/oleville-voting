'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Candidate', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.TEXT
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			electionId: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			positionId: {
				allowNull: false,
				type: Sequelize.INTEGER
			}
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Candidate')
	}
}
