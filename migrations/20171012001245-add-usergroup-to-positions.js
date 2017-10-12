'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
		queryInterface.addColumn('Position', 'userGroupId', Sequelize.INTEGER)
  },

  down: function (queryInterface, Sequelize) {
		queryInterface.removeColumn('Position', 'userGroupId')
  }
};
