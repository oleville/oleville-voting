'use strict';
module.exports = function(sequelize, DataTypes) {
  var Election = sequelize.define('Election', {
    name: DataTypes.STRING,
    startDateTime: DataTypes.DATE,
    endDateTime: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Election;
};