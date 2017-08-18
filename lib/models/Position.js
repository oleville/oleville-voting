const Position = sequelize.define('Position', {
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
	}
})
