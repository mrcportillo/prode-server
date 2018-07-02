'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team1: {
        type: Sequelize.STRING
      },
      team2: {
        type: Sequelize.STRING
      },
      result: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      competition:{
        type: Sequelize.INTEGER,
        references: {model: 'Competitions', key:'id'}
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Matches');
  }
};