'use strict'

module.exports = (sequelize, DataTypes) => {
	const Election = sequelize.define(
		'Election',
		{
			name: DataTypes.STRING,
			startDateTime: DataTypes.DATE,
			endDateTime: DataTypes.DATE,
			isRankChoice: DataTypes.BOOLEAN
		},
		{
			freezeTableName: true
		}
	)

	Election.associate = models => {
		Election.hasMany(models.Vote)
		Election.hasMany(models.Position)
	}

	return Election
}
