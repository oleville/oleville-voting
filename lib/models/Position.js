,module.exports = (sequelize, DataTypes) => {
	const Position = sequelize.define('Position', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	})

	Position.associate = (models) => {
		Position.belongsTo(models.Election, {
			as: 'election'
		})
	}

	return Position
}
