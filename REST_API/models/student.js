import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name: {type: "string", required: true},
    age: {type: "Number", min: 18, max: 50},
    fees: {type: mongoose.Decimal128, validate: (v) => v >= 5500.50}
})

const studentModel = mongoose.model("Student", studentSchema)

export default studentModel