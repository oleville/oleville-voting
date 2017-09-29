'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    authToken: DataTypes.STRING,
    email: DataTypes.STRING,
		tokenExpiration: DataTypes.DATE
  }, {
		freezeTableName: true
  })

	User.associate = (models) => {
		User.belongsTo(models.Election, { as: 'election' })
		User.hasMany(models.UserGroupMembership, { as: 'user' })
	}

  return User
}
