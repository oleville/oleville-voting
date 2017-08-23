module.exports = (sequelize, DataTypes) => {
	const Vote = sequelize.define('Vote', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		}
	},
	{
		freezeTableName: true
	})

	Vote.associate = (models) => {
		Vote.belongsTo(models.Candidate, {
			as: 'candidate'
		})
		Vote.belongsTo(models.Voter, {
			as: 'voter'
		})
		Vote.belongsTo(models.Election, {
			as: 'election'
		})
		Vote.belongsTo(models.Position, {
			as: 'position'
		})
	}

	return Vote
}
