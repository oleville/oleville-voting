'use strict'

module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.addColumn('Position', 'userGroupId', Sequelize.INTEGER)
		queryInterface.addConstraint('Position', ['userGroupId'], {
			type: 'FOREIGN KEY',
			name: 'position_userGroupId_FK',
			references: {
				table: 'UserGroup',
				field: 'id'
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		})
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.removeColumn('Position', 'userGroupId')
		queryInterface.removeConstraint('Position', 'position_useGroupId_FK')
	}
}
