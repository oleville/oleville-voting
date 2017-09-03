'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
		queryInterface.addColumn('Vote', 'candidateId', Sequelize.INTEGER, {
			allowNull: false,
			references: {
				model: 'Candidate',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})

		queryInterface.addColumn('Vote', 'userId', Sequelize.INTEGER, {
			allowNull: false,
			references: {
				model: 'User',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})

		queryInterface.addColumn('Vote', 'electionId', Sequelize.INTEGER, {
			allowNull: false,
			references: {
				model: 'Election',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})

		queryInterface.addColumn('Vote', 'positionId', Sequelize.INTEGER, {
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
		queryInterface.removeColumn('Vote', 'candidateId')
		queryInterface.removeColumn('Vote', 'userId')
		queryInterface.removeColumn('Vote', 'electionId')
		queryInterface.removeColumn('Vote', 'positionId')
  }
}
