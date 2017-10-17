'use strict'

module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
		freezeTableName: true
  })

	Candidate.associate = (models) => {
		Candidate.belongsTo(models.Election)
		Candidate.belongsTo(models.Position)
	}

  return Candidate
}
