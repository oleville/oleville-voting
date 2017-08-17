const VoterGroup = Sequelize.define('VoterGroup', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	}
})
