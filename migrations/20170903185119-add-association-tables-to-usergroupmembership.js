'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		queryInterface.addConstraint('UserGroupMembership', ['userId'], {
			type: 'FOREIGN KEY',
		  name: 'userGroupMembership_userId_FK',
		  references: {
				table: 'User',
		    field: 'id'
			},
		  onDelete: 'CASCADE',
		  onUpdate: 'CASCADE'
			}
		)

		queryInterface.addConstraint('UserGroupMembership', ['userGroupId'], {
			type: 'FOREIGN KEY',
		  name: 'userGroupMembership_userGroupId_FK',
		  references: {
				table: 'UserGroup',
		    field: 'id'
			},
		  onDelete: 'CASCADE',
		  onUpdate: 'CASCADE'
			}
		)
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.removeConstraint('UserGroupMembership', 'userGroup_userId_FK')
		queryInterface.removeConstraint('UserGroupMembership', 'userGroup_userGroupId_FK')
  }
}
