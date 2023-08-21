import dotenv from "dotenv"
dotenv.config();

import express from "express"
import connectDB from "./config/connectDB.js";
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"


const app = express();
const Port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL

//cors policy
app.use(cors());

//database connection
connectDB(DATABASE_URL)

//json
app.use(express.json())

//loading router 
app.use("/api/user", userRoutes)

app.listen(Port, () => {
    console.log(`Server is running at port ${Port}`)
})