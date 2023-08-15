const express = require("express")
const path = require("path")


const app = express();

// app.get("/", (req,res) => {
//     res.send("Hi i am static")
// })

// app.use(express.static(join(process.cwd(), "public")))
// app.use(express.static("public"))
app.use(express.static(path.join('public')))
app.listen(3000, ()=> {
    console.log("listening to port 3000")
})