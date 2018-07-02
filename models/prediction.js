'use strict';
module.exports = (sequelize, DataTypes) => {
  var Prediction = sequelize.define('Prediction', {
    result: DataTypes.STRING,
    timestamps: false
  }, {});
  Prediction.associate = function(models) {
    Prediction.belongsTo(models.Match, {foreignKey: 'match'})
  };
  return Prediction;
};