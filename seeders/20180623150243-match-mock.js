'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Matches', [
      {competition:1, team1:"ARG", team2:"ISL", date:"2018-06-01"},
      {competition:1, team1:"ARG", team2:"CRO", date:"2018-06-06"},
      {competition:1, team1:"ARG", team2:"NIG", date:"2018-06-12"}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
