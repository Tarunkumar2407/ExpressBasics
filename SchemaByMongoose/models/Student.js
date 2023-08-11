import mongoose from "mongoose";

// creating schema
const studentSchema = new mongoose.Schema({
    name:{type: String, required: true, trim: true},
    age: {type: Number, required: true, min: 18, max: 50},
    fees: {type: mongoose.Decimal128, validate: (v)=> v>=5500.50},
    hobbies: {type: Array},
    isActive: {type: Boolean},
    comments: [{value: {type: String}, publish: {type: Date, default: Date.now}}],
    join: {type: Date, default: Date.now}
})

// console.log(studentSchema.path('age'))

//compilling schema
const studentModel = mongoose.model("student", studentSchema)