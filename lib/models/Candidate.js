const Candidate = sequelize.define('Candidate', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.STRING
	},
	electionId: {
		type: Sequelize.INTEGER
	},
	positionId: {
		type: Sequelize.INTEGER
	}
})
