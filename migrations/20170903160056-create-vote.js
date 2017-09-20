'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vote', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
			candidateid: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Vote')
  }
}
