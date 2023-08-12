import express from "express"
import web from "./routes/web.js"
import cookieParser from "cookie-parser";
const app = express();

//cookie parser
app.use(cookieParser())

//load routes
// app.get("/",(req, res) => {
//     res.send("home page hu m")
// })
app.use("/", web)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})