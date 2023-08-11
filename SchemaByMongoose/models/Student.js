import mongoose from "mongoose";

// defining schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: { type: mongoose.Decimal128, validate: (v) => v >= 5500.5 },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// console.log(studentSchema.path('age'))

//compilling schema
const studentModel = mongoose.model("student", studentSchema);

const createDoc = async (nm, ag, fe, hob, isAct, comm) => {
  try {
    //creating schema
    // const studentDoc = new studentModel({
    //   name: "Soumya",
    //   age: 24,
    //   fees: 5900.0,
    //   hobbies: ["singing", "dancing", "teaching"],
    //   isActive: true,
    //   comments: [{ value: "Mongoose is good" }],
    // });
    const studentDoc = new studentModel({
        name: nm,
        age: ag,
        fees: fe,
        hobbies: hob,
        isActive: isAct,
        comments: comm,
      });

    //saving document
    const result = await studentDoc.save();
    console.log(result);
  } catch (error) {console.log(error)}
};
export default createDoc