'use strict'

module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    rank: DataTypes.INTEGER
  }, {
		freezeTableName: true
  })

	Vote.associate = (models) => {
		Vote.belongsTo(models.Candidate, { as: 'candidate' })
		Vote.belongsTo(models.User, { as: 'user' })
		Vote.belongsTo(models.Election, { as: 'election' })
		Vote.belongsTo(models.Position, { as: 'position' })
	}

  return Vote
}
