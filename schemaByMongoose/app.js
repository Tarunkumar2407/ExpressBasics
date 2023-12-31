import express from "express"
import connectDB from "./db/connectDB.js";
import { deleteDoc } from "./models/StudentModel.js";
const app = express();
const DATABASE_URL = "mongodb://127.0.0.1:27017"

//database connections
connectDB(DATABASE_URL);

//create and sove document
// createDoc();
// createMultipleDoc();
// createDoc("Soumya", 24, 5900.0, ["singing","dancing","teaching"], true, [{ value: "Mongoose is good" }],);

//retrieving data
// getAllData();

//update data
// updateDoc();

//delete data 
deleteDoc();


app.listen('3000', () => {
    console.log("server is running at port 3000")
})