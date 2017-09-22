'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
		queryInterface.addConstraint('Position', ['electionId'], {
			type: 'FOREIGN KEY',
			name: 'position_electionId_FK',
			references: {
				table: 'Election',
				field: 'id'
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		})
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.removeConstraint('Position', 'position_electionId_FK')
  }
}
