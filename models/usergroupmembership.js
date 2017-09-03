'use strict';

module.exports = function(sequelize, DataTypes) {
  var UserGroupMembership = sequelize.define('UserGroupMembership', {
  }, {
		freezeTableName: true
  })

	UserGroupMembership.associate = (models) => {
		UserGroupMembership.belongsTo(models.User, { as: 'user' })
		UserGroupMembership.belongsTo(models.UserGroup, { as: 'userGroup' })
	}


  return UserGroupMembership
}
