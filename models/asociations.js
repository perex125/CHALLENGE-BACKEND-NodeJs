import Character from "./Character.js";
import Gender from "./Gender.js";
import Movie from "./Movie.js";



Movie.belongsToMany(Gender, { through: "Movie_Gender" });
Movie.belongsToMany(Character, { through: "Movie_Character" });

