import {
    getCharacter,
    getCharacters,
    addCharacter,
    editCharacter,
    deleteCharacter
} from "../controllers/ControllerCharacter.js"

import {Router} from "express"

const router = Router()

router.get("/", getCharacters)
router.get("/:id", getCharacter)
router.post("/", addCharacter)
router.put("/:id", editCharacter)
router.delete("/:id", deleteCharacter)


export default router
