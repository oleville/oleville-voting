module.exports = (sequelize, DataTypes) => {
	const VoterGroupAssoc = sequelize.define('VoterGroupAssoc', {
		voterId: {
			type: DataTypes.INTEGER
		},
		voterGroupId: {
			type: DataTypes.INTEGER
		}
	})

	return VoterGroupAssoc
}
