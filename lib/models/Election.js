module.exports = (sequelize, DataTypes) => {
	const Election = sequelize.define('Election', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		startDateTime: {
			type: DataTypes.DATE
		},
		endDateTime: {
			type: DataTypes.DATE
		}
	},
 	{
		freezeTableName: true
	})

	return Election
}