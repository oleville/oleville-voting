const Election = sequelize.define('Election', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	startDateTime: {
		type: Sequelize.DATETIME
	},
	endDateTime: {
		type: Sequelize.DATETIME
	}
})
