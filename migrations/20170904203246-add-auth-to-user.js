'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('User', 'authToken', Sequelize.STRING)
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('User', 'authToken')
  }
}
