import sequelize from "sequelize";
import db from "../config/db.js";
import Character from "./Character.js";
import Gender from "./Gender.js";

const Movie = db.define("Movie", {
	imagen: {
		type: sequelize.STRING,
		allowNull: false,
	},
	titulo: {
		type: sequelize.STRING,
		allowNull: false,
	},
	fecha_creacion: {
		type: sequelize.DATE,
	},
	calificacion: {
		type: sequelize.INTEGER,
		allowNull: false,
	},
});




export default Movie;