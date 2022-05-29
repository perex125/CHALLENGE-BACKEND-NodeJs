import sequelize from "sequelize";
import Movie from "./Movie.js";
import db from "../config/db.js";

const Gender = db.define("Gender", {
	nombre: {
		type: sequelize.STRING,
		allowNull: false,
	},
	imagen: {
		type: sequelize.STRING,
		allowNull: false,
	},
});




export default Gender;