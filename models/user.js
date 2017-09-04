'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    googleId: DataTypes.BIGINT,
    email: DataTypes.STRING
  }, {
		freezeTableName: true
  })

	User.associate = (models) => {
		User.belongsTo(models.Election, { as: 'election' })
	}

  return User
}
