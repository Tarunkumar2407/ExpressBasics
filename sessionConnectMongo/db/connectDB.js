import mongoose from "mongoose";

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

// const connectDB =(DATABASE_URL)=> {
//  return mongoose.connect(DATABASE_URL)
//           .then(()=> console.log('connected successfully'))
//           .catch((error)=> console.log(error))
// }

const connectDB = async (DATABASE_URL)=> {
 try {  
        const DB_OPTIONS = {
            // user: "Tarun",
            // pass: "123456",
            dbName: "schooldb",
            // authSource: "schooldb"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        return console.log('connected successfully');
    } catch (error) {
        return console.log(error);
    }
}


export default connectDB