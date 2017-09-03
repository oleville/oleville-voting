'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
		queryInterface.addColumn('Candidate', 'electionId', Sequelize.INTEGER, {
			allowNull: false,
			references: {
				model: 'Election',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})

		queryInterface.addColumn('Candidate', 'positionId', Sequelize.INTEGER, {
			allowNull: false,
			references: {
				model: 'Position',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.removeColumn('Candidate', 'electionId')
		queryInterface.removeColumn('Candidate', 'positionId')
  }
}
