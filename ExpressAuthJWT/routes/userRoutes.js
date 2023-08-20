import express from "express"
import UserController from "../controllers/userController.js"
import checkUserAuth from "../middlewares/auth_middleware.js"

const router = express.Router()

//routelevel middleware to protect route
router.post("/changepassword", checkUserAuth)
router.get("/loggeduser", checkUserAuth)

//public routes
router.post("/register", UserController.userRegistration)
router.post("/login", UserController.userLogin)

//protected routes 
router.post("/changepassword", UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)

export default router