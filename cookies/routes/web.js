import express from "express"
import { CookiesAction, homePage } from "../controller/cookiesAction.js"
const router = express.Router()

router.get("/", homePage)
router.get("/setcookie", CookiesAction.set_cookie )
router.get("/getcookie", CookiesAction.get_cookie )
router.get("/deletecookie", CookiesAction.delete_cookie )

export default router