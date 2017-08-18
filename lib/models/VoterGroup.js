module.exports = (sequelize, DataTypes) => {
	const VoterGroup = sequelize.define('VoterGroup', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		}
	})

	return VoterGroup
}
