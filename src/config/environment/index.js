'use strict';
/*eslint no-process-env:0*/

import path from 'path';
import { merge } from 'lodash';
import fs from 'fs';

const DEFAULT_PORT = 80;

/*function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}*/

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Server port
  port: process.env.PORT || DEFAULT_PORT,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Client url
  clientUrl: 'http://localhost:8090',
  db:{
    host: 'localhost',
    port: 5432,
    name: 'prode2',
    username: 'mzubieta',
    password: 'pucheto22'
  },

  logLevel: process.env.LOG_LEVEL || 'info',
  prettyLogs: false
};

// Export the config object based on the NODE_ENV
// ==============================================

console.log('Env', process.env.NODE_ENV);

// Load the json file that has the server settings, or just use an empty object
var serverConfig = {};
if (fs.existsSync(`${__dirname}/server.json`)) {
  log.info('Found server config file');
  serverConfig = JSON.parse(fs.readFileSync(`${__dirname}/server.json`, 'utf8'));
}
module.exports = merge(all, require(`./${process.env.NODE_ENV}.js`) || {}, serverConfig);
