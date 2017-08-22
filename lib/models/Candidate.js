module.exports = (sequelize, DataTypes) => {
	const Candidate = sequelize.define('Candidate', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		},
		electionId: {
			type: DataTypes.INTEGER
		},
		positionId: {
			type: DataTypes.INTEGER
		}
	},
	{
		freezeTableName: true
	})

	return Candidate
}
