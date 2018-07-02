'use strict'
import { get } from 'lodash';
import models from '../../../models/index';

const NO_COMPETITION_ID_NAME = 'NO COMPETITION ID';
const NO_COMPETITION_ID_MESSAGE = 'Competition should be especified';

async function  getCompetitions(){
    let result = models.Competition.findAll({
        attributes: ["id", "name", "teams"]
    });
    const competitions = await result;
    return competitions;
}

export function index(req, res) {
    getCompetitions()
        .then(result => {
            res.send({competitions: result})
        })
        .catch(err => {
            res.send(err)
        })
}

async function  getMatches(competitionId){
    let result = models.Match.findAll({
        attributes: ["id", "team1", "team2", "date", "result", "competition"],
        where: {
            competition: competitionId
        }
    });
    const matches = await result;
    return matches;
}

export function matches(req, res) {
    const competitionId = get(req, 'params.competitionId');
    if (competitionId) {
        getMatches(competitionId)
          .then(result => {
              res.send(
                  {matches: result}
              )
          })
          .catch(err => {
              res.send(err);
          })
    } else {
        res.send({ error: { name: NO_COMPETITION_ID_NAME, message: NO_COMPETITION_ID_MESSAGE } });
    }
}

export function predictionsPost(req, res) {
    models.Prediction.bulkCreate(req.body, {fields: ['result','match']}, {validate: true})
        .then(result => {
        res.send("creadas");    
    })
    .catch(err => {
        res.send(err);
    })
}

export function competitionPost(req, res){
    Competition.bulkCreate(req.body).then(res => {
        res.send({result: "competiciones creadas"});
    })
    .catch(err => {
        res.send({result: "no se crearon"});
    })
}

export function matchPost(req, res){
    Match.bulkCreate(req.body).then(res => {
        res.send({result: "matches creadas"});
    })
    .catch(err => {
        res.send({result: "no se crearon"});
    })
}

async function  getPredictions(){
    let result = models.Prediction.findAll({
        attributes: ["match", "result"],
    });
    const predictions = await result;
    return predictions;
}

export function predictions(req, res){
    getPredictions()
        .then(result => {
            res.send({"predictions": result})
        })
        .catch(err => {
            res.send(err);
        })

}