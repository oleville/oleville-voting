'use strict'

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			name: DataTypes.STRING,
			username: DataTypes.STRING,
			authToken: DataTypes.STRING(2048),
			email: DataTypes.STRING,
			tokenExpiration: DataTypes.DATE
		},
		{
			freezeTableName: true
		}
	)

	User.associate = models => {
		User.belongsTo(models.Election)
		User.hasMany(models.UserGroupMembership)
		User.hasMany(models.Vote)
	}

	return User
}
