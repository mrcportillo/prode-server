require('dotenv').config();

var env = (process.env.NODE_ENV = process.env.APP_ENV || 'development');

if (env === 'local') {
    // Register the Babel require hook
    require('babel-register');
}

// Export the application
exports = module.exports = require('./app');
