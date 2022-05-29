import {
    getMovie,
    getMovies,
    addMovie,
    editMovie,
    deleteMovie
} from "../controllers/ControllerMovie.js"

import {Router} from "express"

const router = Router()

router.get("/", getMovies)
router.get("/:id", getMovie)
router.post("/", addMovie)
router.put("/:id", editMovie)
router.delete("/:id", deleteMovie)


export default router