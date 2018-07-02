'use strict';

import apiCompetitions from './api/competition';
import apiPredictions from './api/prediction';
import apiAuth from './auth';


export default function(app) {
  app.use('/api/competitions', apiCompetitions);
  app.use('/api/predictions', apiPredictions);
  app.use('/auth', apiAuth);
}
