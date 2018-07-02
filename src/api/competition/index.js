'use strict';

import { Router } from 'express';
import * as competitionsController from './competitions.controller';
var passport = require("passport");
import strategy from '../../auth/jwt';



passport.use(strategy);

var router = new Router();

router.get(
  '/',
  passport.authenticate('jwt', {session:false}), 
  competitionsController.index
);

router.get(
  '/:competitionId/matches',
  competitionsController.matches
);

router.post(
  '/:competitionId/matches',
  competitionsController.matchPost
);

module.exports = router;
