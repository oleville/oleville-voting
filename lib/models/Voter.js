module.exports = (sequelize, DataTypes) => {
	const Voter = sequelize.define('Voter', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	})

	Voter.associate = (models) => {
		Voter.belongsTo(models.Election, {
			as: 'election'
		})
	}

	return Voter
}
