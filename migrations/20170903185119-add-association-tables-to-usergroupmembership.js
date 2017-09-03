'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		queryInterface.addColumn('UserGroupMembership', 'userId', Sequelize.INTEGER, {
			allowNull: false,
			references: {
				model: 'User',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})

		queryInterface.addColumn('UserGroupMembership', 'userGroupId', Sequelize.INTEGER, {
			allowNull: false,
			references: {
				model: 'UserGroup',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})
  },

  down: (queryInterface, Sequelize) => {
		queryInterface.removeColumn('UserGroupMembership', 'userId')
		queryInterface.removeColumn('UserGroupMembership', 'userGroupId')
  }
};
