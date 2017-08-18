const Voter = sequelize.define('Voter', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	electionId: {
		type: Sequelize.INTEGER
	}
})
