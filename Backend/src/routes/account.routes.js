import {transerMoney,balance,createStatement} from "../controllers/account.controller.js"
import express from "express"

const router= express.Router();

router.get("/balance", balance)
router.get("/statement", createStatement)
router.post("/transfer",transerMoney)




export default router;