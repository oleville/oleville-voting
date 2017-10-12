'use strict'

module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    rank: DataTypes.INTEGER
  }, {
		freezeTableName: true
  })

	Vote.associate = (models) => {
		Vote.belongsTo(models.Candidate)
		Vote.belongsTo(models.User)
		Vote.belongsTo(models.Election)
		Vote.belongsTo(models.Position)
	}

  return Vote
}
