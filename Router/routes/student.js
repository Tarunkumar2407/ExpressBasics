import express from "express"

const router = express.Router();

router.get('/student', (req,res) => {
    res.send("All Students")
})

export default router