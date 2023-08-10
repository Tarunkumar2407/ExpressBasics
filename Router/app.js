import express from "express"
import stu from "./routes/student.js"

const app = express();

const port = "3000";

app.use("/vidyarthi", stu)

app.listen(port, ()=> {
    console.log("server is running on port 3000")
})