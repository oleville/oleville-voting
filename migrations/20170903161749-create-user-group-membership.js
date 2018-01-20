'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('UserGroupMembership', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
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
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			userGroupId: {
				allowNull: false,
				type: Sequelize.INTEGER
			}
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('UserGroupMembership')
	}
}
