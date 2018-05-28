'use strict';

import { Router } from 'express';
import * as controller from './competitions.controller';

var router = new Router();

router.get(
  '/',
  controller.index
);

router.get(
  '/:competitionId/matches',
  controller.matches
);


module.exports = router;
