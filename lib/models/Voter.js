module.exports = (sequelize, DataTypes) => {
	const Voter = sequelize.define('Voter', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		electionId: {
			type: DataTypes.INTEGER
		}
	},
	{
		freezeTableName: true
	})

	return Voter
}
