/**
 * Main application routes
 */

'use strict';

import apiCompetitions from './api/competition';

export default function(app) {
  // Insert routes below
  app.use('/api/competitions', apiCompetitions);
  app.use('/api/check', (req, res) => {
    res.send({ ok: true, time: new Date().toISOString() });
  });
}
