/**
 * Main application file
 */

'use strict';

import express from 'express';
import config from './config/environment';
import http from 'http';
import sqldb from './sqldb';
import { waitForDB } from './sqldb/utils';

// Setup server
var app = express();
var server = http.createServer(app);
require('./config/express').default(app);
require('./routes').default(app);

// wait db connection and then start server
waitForDB().then( () => {
  sqldb.sequelize
  .sync()
  .then(startServer)
  .catch(err => {
    log.error('Server failed to start due to error: %s', err);
  });
})
.catch(error => {
  log.error(error);
});

function startServer() {
  app.server = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

// Expose app
exports = module.exports = app;
