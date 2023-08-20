import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const DB_NAME = process.env.DB_NAME

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
             dbName : DB_NAME
        }
        await mongoose.connect(DATABASE_URL)
        console.log("Connected Successfully...")
        
    } catch (error) {
        console.log(error)    
    }
}

export default connectDB