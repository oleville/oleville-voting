module.exports = (sequelize, DataTypes) => {
	const Position = sequelize.define('Position', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		},
		electionId: {
			type: DataTypes.INTEGER
		}
	})

	return Position
}
