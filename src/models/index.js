import Sequelize, { INTEGER, STRING } from "sequelize";
import { db } from '../config/environment/index';
var str_db = "postgres://" + db.username + ":" + db.password + "@" + db.host + ":" + db.port + "/" + db.name;

var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
        timestamps: false
    }
}

const sequelize = new Sequelize(str_db, opts)
const Competition = sequelize.define('competition', {
    id: {type: INTEGER, allowNull: false, unique: true, primaryKey: true},
    name: {type: STRING, allowNull: false},
    teams: {type: INTEGER, allowNull: true},
  
})

const Prediction = sequelize.define('prediction', {
    
    id: {type: INTEGER, allowNull: false, unique: true, primaryKey: true},
    match: {type: INTEGER, allowNull: false},
    result: {type: STRING, allowNull:false},
    
})

const Match = sequelize.define('match', {
    
    id: {type: INTEGER, allowNull: false, unique: true, primaryKey: true},
    competition: {type: INTEGER, },
    team1: {type: INTEGER, allowNull: false},
    team2: {type: STRING, allowNull:false},
    date: {type: STRING, allowNull:false},
    
})

export {Prediction, Match, Competition};