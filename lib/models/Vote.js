const Vote = sequelize.define('Vote', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	candidateId: {
		type: Sequelize.INTEGER
	},
	voterId: {
		type: Sequelize.INTEGER
	},
	electionId: {
		type: Sequelize.INTEGER
	},
	positionId: {
		type: Sequelize.INTEGER
	}
})
