'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('User', 'googleId', Sequelize.BIGINT)
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('User', 'googleId')
  }
}
