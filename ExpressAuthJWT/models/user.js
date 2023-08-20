import mongoose from "mongoose"

//defining schema 
const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    tc: {type: Boolean}
})

//compilling schema 
const userModel = new mongoose.model("User", userSchema)
export default userModel