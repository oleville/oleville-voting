'use strict'

module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    name: DataTypes.STRING
  }, {
		freezeTableName: true
  })

	UserGroup.associate = (models) => {
	}

  return UserGroup
}
