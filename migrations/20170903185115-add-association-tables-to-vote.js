'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.addConstraint('Vote', ['candidateId'], {
			type: 'FOREIGN KEY',
			name: 'vote_candidateId_FK',
			references: {
				table: 'Candidate',
				field: 'id'
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		})

		queryInterface.addConstraint('Vote', ['userId'], {
			type: 'FOREIGN KEY',
			name: 'vote_userId_FK',
			references: {
				table: 'User',
				field: 'id'
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		})

		queryInterface.addConstraint('Vote', ['electionId'], {
			type: 'FOREIGN KEY',
			name: 'vote_electionId_FK',
			references: {
				table: 'Election',
				field: 'id'
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		})

		queryInterface.addConstraint('Vote', ['positionId'], {
			type: 'FOREIGN KEY',
			name: 'vote_positionId_FK',
			references: {
				table: 'Position',
				field: 'id'
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		})
	},

	down: (queryInterface, Sequelize) => {
		queryInterface.removeConstraint('Vote', 'vote_candidateId_FK')
		queryInterface.removeConstraint('Vote', 'vote_userId_FK')
		queryInterface.removeConstraint('Vote', 'vote_electionId_FK')
		queryInterface.removeConstraint('Vote', 'vote_positionId_FK')
	}
}
