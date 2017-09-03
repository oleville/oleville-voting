'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
		queryInterface.addColumn('Position', 'electionId', Sequelize.INTEGER, {
			allowNull: false,
			references: {
				model: 'Election',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.removeColumn('Position', 'electionId')
  }
}
