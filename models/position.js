'use strict'

module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
		freezeTableName: true
  })

	Position.associate = (models) => {
		Position.belongsTo(models.Election, { as: 'election' })
	}

  return Position
}
