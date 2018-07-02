'use strict';
import {hash} from 'bcrypt';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    timestamps: false
  }, {});
  User.beforeCreate((user, options) => {
    return hash(user.password, 10).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  return User;
};