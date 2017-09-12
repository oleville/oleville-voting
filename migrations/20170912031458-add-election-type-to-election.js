'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
		queryInterface.addColumn('Election', 'isRankChoice', Sequelize.BOOLEAN, {
			allowNull: false,
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		})
  },

  down: function (queryInterface, Sequelize) {
		queryInterface.removeColumn('Election', 'isRankChoice')
  }
}
