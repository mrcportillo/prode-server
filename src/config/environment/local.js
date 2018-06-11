'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
  logLevel: 'debug',
  port: 9000,
  prettyLogs: true,
  sequelize: {
    uri: process.env.SEQUELIZE_URI,
    options: {
      dialect: 'postgres',
      logging: message => {
        return console.log(pd.sql(message));
      }
    }
  }
};
