import express from "express"
import connectDB from "./db/connectDB.js";
import createDoc from "./models/Student.js";
const app = express();
const DATABASE_URL = "mongodb://127.0.0.1:27017"

//database connections
connectDB(DATABASE_URL);

//create and sove document
createDoc("Soumya", 24, 5900.0, ["singing","dancing","teaching"], true, [{ value: "Mongoose is good" }],);

app.listen('3000', () => {
    console.log("server is running at port 3000")
})