import mongoose from "mongoose";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// const connectDB =(DATABASE_URL)=> {
//  return mongoose.connect(DATABASE_URL)
//           .then(()=> console.log('connected successfully'))
//           .catch((error)=> console.log(error))
// }

const connectDB = async (DATABASE_URL)=> {
 try {
        await mongoose.connect(DATABASE_URL);
        return console.log('connected successfully');
    } catch (error) {
        return console.log(error);
    }
}


export default connectDB