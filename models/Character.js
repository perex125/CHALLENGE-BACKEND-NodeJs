import sequelize from "sequelize";
import db from "../config/db.js";
import Movie from "./movie.js";

const Character = db.define("Character", {
	imagen: {
		type: sequelize.STRING,
		allowNull: false,
	},
	nombre: {
		type: sequelize.STRING,
		allowNull: false,
	},
	edad: {
		type: sequelize.INTEGER,
		allowNull: false,
	},
	peso: {
		type: sequelize.INTEGER,
		allowNull: false,
	},
	historia: {
		type: sequelize.TEXT,
		allowNull: false,
	},
});



export default Character;