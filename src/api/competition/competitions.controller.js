'use strict'
import { competitions } from './competitions.mocks';
import { matches as matchList} from '../match/match.mocks';
import { get } from 'lodash';

const NO_COMPETITION_ID_NAME = 'NO COMPETITION ID';
const NO_COMPETITION_ID_MESSAGE = 'Competition should be especified';

export function index(req, res) {
    res.send({competitions: competitions})
}

export function matches(req, res) {
    const competitionId = get(req, 'params.competitionId');
    if (competitionId) {
        res.send({matches: matchList(5)});
    } else {
        res.send({error: {name: NO_COMPETITION_ID_NAME, message: NO_COMPETITION_ID_MESSAGE}});
    }
}