module.exports = (sequelize, DataTypes) => {
	const Vote = sequelize.define('Vote', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		candidateId: {
			type: DataTypes.INTEGER
		},
		voterId: {
			type: DataTypes.INTEGER
		},
		electionId: {
			type: DataTypes.INTEGER
		},
		positionId: {
			type: DataTypes.INTEGER
		}
	})

	return Vote
}
