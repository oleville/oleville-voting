module.exports = (sequelize, DataTypes) => {
	const Candidate = sequelize.define('Candidate', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	})

	Candidate.associate = (models) => {
		Candidate.belongsTo(models.Election, {
			as: 'election'
		})
		Candidate.belongsTo(models.Position, {
			as: 'position'
		})
	}

	return Candidate
}
