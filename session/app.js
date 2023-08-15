import express from "express"
import web from "./routes/web.js"
import session from "express-session"

const app = express()

app.use(session({
    name: 'sessionExpress',
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 200000 }
}))

app.use('/', web)

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})