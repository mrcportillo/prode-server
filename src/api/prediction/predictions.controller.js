'use strict'
import models from '../../../models/index';

export function predictionsPost(req, res) {
    models.Prediction.bulkCreate(req.body, {fields: ['result','match']}, {validate: true})
        .then(result => {
        res.send("creadas");    
    })
    .catch(err => {
        res.send(err);
    })
}

export function predictions(req, res){
    models.Prediction.findAll({attributes: ['result', 'match']})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err);
        })
}