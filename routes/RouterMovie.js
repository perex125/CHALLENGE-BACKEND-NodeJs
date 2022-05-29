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
router.get("/:idMovie", getMovie)
router.post("/", addMovie)
router.put("/:idMovie", editMovie)
router.delete("/:idMovie", deleteMovie)


export default router