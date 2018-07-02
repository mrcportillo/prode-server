'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Predictions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      result: {
        type: Sequelize.STRING
      },
      match:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Matches', key:'id'}
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Predictions');
  }
};