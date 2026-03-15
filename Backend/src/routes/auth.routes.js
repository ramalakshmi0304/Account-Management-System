import {signUpUser,loginUser} from "../controllers/auth.controller.js"
import {authenticatedUser} from "../middlewares/auth.middleware.js"
import express from "express"

const router= express.Router();

router.post("/signup", signUpUser)
router.post("/login",authenticatedUser, loginUser)



export default router;