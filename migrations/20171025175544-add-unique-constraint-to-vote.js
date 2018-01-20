'use strict'

module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.sequelize.query(
			'ALTER TABLE Vote ADD UNIQUE `unique_vote`(`rank`, `userId`, `electionId`, `positionId`);'
		)
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.sequelize.query('ALTER TABLE Vote DROP INDEX `unique_vote`;')
	}
}
