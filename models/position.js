'use strict'

module.exports = (sequelize, DataTypes) => {
	const Position = sequelize.define(
		'Position',
		{
			name: DataTypes.STRING,
			description: DataTypes.TEXT
		},
		{
			freezeTableName: true
		}
	)

	Position.associate = models => {
		Position.belongsTo(models.Election)
		Position.belongsTo(models.UserGroup)
		Position.hasMany(models.Candidate)
	}

	return Position
}
