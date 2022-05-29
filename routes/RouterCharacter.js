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
router.get("/:idCharacter", getCharacter)
router.post("/", addCharacter)
router.put("/:idCharacter", editCharacter)
router.delete("/:idCharacter", deleteCharacter)


export default router
