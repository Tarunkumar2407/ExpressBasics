import mongoose from "mongoose"

const connectDB = async (DATABASE_URL) => {
      try {
        const DB_OPTIONS = {
              dbName: "collegedb"
             }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        return console.log("Connected Successfully")
        
      } catch (error) {
        console.log("Error in connecting")
      }
}

export default connectDB