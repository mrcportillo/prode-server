/**
 * Main application routes
 */

'use strict';

export default function(app) {
  // Insert routes below
  app.use('/api/check', (req, res) => {
    res.send({ ok: true, time: new Date().toISOString() });
  });
}
