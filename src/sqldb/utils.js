import { sequelize } from './index';
import config from '../config/environment';

export function waitForDB() {
  if (config.env === 'test' || config.env === 'local') {
    return new Promise((resolve, reject) => {
      (function checker() {
        sequelize
          .authenticate()
          .then(resolve)
          .catch(error => setTimeout(checker, 1000));
      })();
    });
  } else {
    return Promise.resolve();
  }
}
