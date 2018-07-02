'use strict';

import { Router } from 'express';
import * as controller from './auth.controller';
var passport = require("passport");


import strategy from './jwt';

passport.use(strategy)

var authRouter = new Router();


authRouter.post(
  '/signup',
  controller.signup
);

authRouter.post(
  '/login',
  controller.login
);

authRouter.get(
  '/',
  controller.users
)

module.exports = authRouter;
