import Moment from 'moment';

export const matches = numberOfMatches => {
    let idx;
    let arr = [];
    for (idx = 0; idx < numberOfMatches; idx++) {
        arr.push({id: idx, team1: 'ABC', team2: 'DEF', date: Moment().add(idx, 'day')})
    }
    return arr;
}