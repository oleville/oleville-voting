'use strict'

module.exports = function(sequelize, DataTypes) {
	var UserGroupMembership = sequelize.define(
		'UserGroupMembership',
		{},
		{
			freezeTableName: true
		}
	)

	UserGroupMembership.associate = models => {
		UserGroupMembership.belongsTo(models.User)
		UserGroupMembership.belongsTo(models.UserGroup)
	}

	return UserGroupMembership
}
