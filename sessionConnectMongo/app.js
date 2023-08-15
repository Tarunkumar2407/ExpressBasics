import express from "express"
import web from "./routes/web.js"
import session from "express-session"
import connectDB from "./db/connectDB.js";
import MongoStore from "connect-mongo";
import dotenv from "dotenv"
dotenv.config({
    path:"sessionConnectMongo/.env"
});





const app = express()
const port = process.env.PORT ;
const DATABASE_URL = "mongodb://127.0.0.1:27017"

connectDB(DATABASE_URL);

const sessionStorage = MongoStore.create({
    mongoUrl: DATABASE_URL,
    dbName: "schooldb",
    collectionName: "sessions",
    ttl: 14*24*60*60,
    autoRemove: "native",
})

app.use(session({
    name: 'sessionExpress',
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 200000 },
    store: sessionStorage
}))

app.use('/', web)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
