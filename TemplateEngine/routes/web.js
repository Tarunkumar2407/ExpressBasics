import express from "express"
// import homeController from "../controller/homeController"
// import { homeController } from "../controller/homeController"
const router = express.Router()

router.get('/', (req, res)=> {
   res.render('index', {name:"Tarun"});
} )

export default router