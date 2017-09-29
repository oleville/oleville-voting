'use strict'

module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    name: DataTypes.STRING
  }, {
		freezeTableName: true
  })

	UserGroup.associate = (models) => {
		UserGroup.hasMany(models.UserGroupMembership, { as: 'userGroup' })
	}

  return UserGroup
}
