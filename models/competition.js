'use strict';
module.exports = (sequelize, DataTypes) => {
  var Competition = sequelize.define('Competition', {
    name: DataTypes.STRING,
    teams: DataTypes.INTEGER,
    timestamps: false
  }, {});
  Competition.associate = function(models) {
  };
  return Competition;
};