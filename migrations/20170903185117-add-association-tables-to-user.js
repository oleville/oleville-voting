'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.addConstraint('User', ['electionId'], {
			type: 'FOREIGN KEY',
			name: 'user_electionId_FK',
			references: {
				table: 'Election',
				field: 'id'
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		})
	},

	down: (queryInterface, Sequelize) => {
		queryInterface.removeConstraint('User', 'user_electionId_FK')
	}
}
