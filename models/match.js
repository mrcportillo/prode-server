'use strict';
module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('Match', {
    team1: DataTypes.STRING,
    team2: DataTypes.STRING,
    result: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {});
  Match.associate = function(models) {
    Match.belongsTo(models.Competition)
  };
  return Match;
};