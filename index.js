import express from "express"
import dotenv from 'dotenv'
import db from './config/db.js'
import Movie from "./models/Movie.js"
import Gender from "./models/Gender.js"
import Character from "./models/Character.js"
import "./models/asociations.js"
import routerGender from "./routes/RouterGender.js"
import routerCharacter from "./routes/RouterCharacter.js"
import routerMovie from "./routes/RouterMovie.js"

const app = express()
app.use(express.json())
dotenv.config()

//routes
app.use("/api/characters", routerCharacter);
app.use("/api/movies", routerMovie);
app.use("/api/genders", routerGender);

const PORT = process.env.PORT || 4000

await db .sync({ force: false });

db.sync()
    .then(()=>console.log('DB Conectada'))
    .catch((error) => console.log(error));

app.listen(PORT,  ()=> {
    console.log(`Servidor corriendo en ${PORT}`);
})




