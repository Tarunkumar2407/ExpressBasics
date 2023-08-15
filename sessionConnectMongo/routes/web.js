import express from "express"
import { homePage, SessionAction } from "../controller/SessionAction.js"

const router = express.Router();

router.get('/', homePage)
router.get('/getsession', SessionAction.getSessionInfo)
router.get('/deletesession', SessionAction.deleteSession)
router.get('/regeneratesession', SessionAction.regenerateSession)
router.get('/setgetvariable', SessionAction.setGetVariable)
router.get('/setdevice', SessionAction.setdevice)

export default router