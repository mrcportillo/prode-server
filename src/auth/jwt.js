var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {}
jwtOptions.secretOrKey = 'ladero';
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('Bearer');
import models from '../../models/index';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);
  models.User.findOne(
    {
      where: { username: jwt_payload.username },
      attributes: ['username', 'password']
    }
  )
    .then(user => {
      if (user) {
        next(null, user);
      }
      else {
        next(null, false, { message: 'Wrong user' });
      }
    })
    .catch(err => {
      console.log(err);
      next(null, false);
    })
});

export default strategy;