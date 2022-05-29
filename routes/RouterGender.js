import {
    getGenders,
    addGender,
    editGender,
    deleteGender
} from "../controllers/ControllerGender.js"

import {Router} from "express"

const router = Router()

router.get("/", getGenders)
router.post("/", addGender)
router.put("/:idGender", editGender)
router.delete("/:idGender", deleteGender)


export default router
