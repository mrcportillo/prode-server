import models from '../../models/index';
import { compare } from 'bcrypt';
var jwt = require('jsonwebtoken');


export function login(req, res) {
    if (req.body.username && req.body.password) {
        var name = req.body.username;
        var password = req.body.password;
        models.User.findOne(
            {
                where: { username: name },
                attributes: ['username', 'password']
            }
        )
            .then(user => {
                compare(password, user.password)
                    .then(result => {
                        if (result) {
                            var payload = { username: user.username };
                            var token = jwt.sign(payload, "ladero", {expiresIn: '30m'});
                            res.json({
                                message: "ok", token: token, username: user.username
                            });
                        }
                        else {
                            res.status(401).json({ message: "passwords did not match" });
                        }
                    })
                    .catch(err => {
                        res.json({ message: err })
                    })
            })
            .catch(err => {
                res.json({ message: err })
            })
    }
    else {
        res.json({ message: "wrong attributes" })
    }
};

export function signup(req, res) {
    models.User.create(
        { username: req.body.username, password: req.body.password }, { validate: true })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
}

export function users(req, res) {
    models.User.findAll({ attributes: ['username', 'password'] })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
}