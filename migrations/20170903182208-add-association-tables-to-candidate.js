'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
		queryInterface.addConstraint('Candidate', ['electionId'], {
			type: 'FOREIGN KEY',
		  name: 'candidate_electionId_FK',
		  references: {
				table: 'Election',
		    field: 'id'
			},
		  onDelete: 'CASCADE',
		  onUpdate: 'CASCADE'
			}
		)
	},

  down: (queryInterface, Sequelize) => {
		queryInterface.removeConstraint('Candidate', 'candidate_electionId_FK')
  }
}
