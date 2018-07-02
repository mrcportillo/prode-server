'use strict';

import { Router } from 'express';
import * as controller from './predictions.controller';

var predictionsRouter = new Router();


predictionsRouter.post(
  '/',
  controller.predictionsPost
);

predictionsRouter.get(
  '/',
  controller.predictions
)

module.exports = predictionsRouter;
