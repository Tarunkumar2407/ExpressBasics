import express from "express"
import web from "./routes/web.js"

const app = express();
const port = "3000";

// app.set("views", "./views")
app.set("view engine", "ejs")
app.use('/', web)

app.listen(port, ()=> {
    console.log("Server is running on port 3000")
})