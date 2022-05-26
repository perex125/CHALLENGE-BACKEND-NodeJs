import express from "express"
import dotenv from 'dotenv'
import db from './config/db.js'

const app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 4000

db.sync({/*force: true*/})
    .then(()=>console.log('DB Conectada'))
    .catch((error) => console.log(error));

app.listen(PORT,  ()=> {
    console.log(`Servidor corriendo en ${PORT}`);
})




