import express from "express"
import connectDB from "./db/connectDB.js";
const app = express();
const DATABASE_URL = "mongodb://127.0.0.1:27017"

connectDB(DATABASE_URL);

app.listen('3000', () => {
    console.log("server is running at port 3000")
})