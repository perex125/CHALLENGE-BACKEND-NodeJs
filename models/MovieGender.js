import sequelize from 'sequelize';
import db from "../config/db.js";
import Gender from './Gender.js';
import Movie from './Movie.js';


const MovieGender = db.define('MovieGender', {
    GenderId: {
        type: sequelize.INTEGER,
        references: {
            model: 'Gender',
            key: 'id'
        }
    },
    MovieId: {
        type: sequelize.INTEGER,
        references: {
            model: 'Movie',
            key: 'id'
        }
    }
},
{
    timestamps: false
}
);
Movie.belongsToMany(Gender, { through: MovieGender });
Gender.belongsToMany(Movie, { through: MovieGender });

export default MovieGender;