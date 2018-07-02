/**
 * Express configuration
 */

'use strict';

import compression from 'compression';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import errorHandler from 'errorhandler';
var passport = require("passport");


export default function (app) {
  const env = app.get('env');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(methodOverride());
  app.use(passport.initialize());


  if (env === 'development' || env === 'test') {
    app.use(errorHandler()); // Error handler - has to be last
  }
}
