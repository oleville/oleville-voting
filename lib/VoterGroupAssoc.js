const VoterGroupAssoc = Sequelize.define('VoterGroupAssoc', {
	voterId: {
		type: Sequelize.INTEGER
	},
	voterGroupId: {
		type: Sequelize.INTEGER
	}
})
