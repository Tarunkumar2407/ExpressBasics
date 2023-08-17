import express from "express"
import StudentController from "../controllers/studentController.js"


const router = express.Router()

router.get("/", StudentController.getAllDocs)
router.get("/:id", StudentController.getDocById)
router.post("/", StudentController.createDoc)
router.put("/:id", StudentController.updateDoc)
router.delete("/:id", StudentController.deleteDoc)

export default router