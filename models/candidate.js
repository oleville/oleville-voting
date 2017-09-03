'use strict';

module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Candidate;
};
