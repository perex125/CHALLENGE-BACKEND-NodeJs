import sequelize from 'sequelize';
import db from "../config/db.js";
import Character from './Character.js';
import Movie from './Movie.js';

const CharacterMovie = db.define('CharacterMovie', {
    CharacterId: {
        type: sequelize.INTEGER,
        references: {
            model: 'character',
            key: 'id'
        }
    },
    MovieId: {
        type: sequelize.INTEGER,
        references: {
            model: 'movie',
            key: 'id'
        }
    }
},
{
    timestamps: false
}
);
Movie.belongsToMany(Character, { through: CharacterMovie });
Character.belongsToMany(Movie, { through: CharacterMovie });


export default CharacterMovie;