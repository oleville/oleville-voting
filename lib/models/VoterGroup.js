module.exports = (sequelize, DataTypes) => {
	const VoterGroup = sequelize.define('VoterGroup', {
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

	return VoterGroup
}
