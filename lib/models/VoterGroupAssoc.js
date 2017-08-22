module.exports = (sequelize, DataTypes) => {
	const VoterGroupAssoc = sequelize.define('VoterGroupAssoc', {
	},
	{
		freezeTableName: true
	})

	VoterGroupAssoc.associate = (models) => {
		VoterGroupAssoc.belongsTo(models.Voter, {
			as: 'voter'
		})
		VoterGroupAssoc.belongsTo(models.VoterGroup, {
			as: 'voterGroup'
		})
	}

	return VoterGroupAssoc
}
