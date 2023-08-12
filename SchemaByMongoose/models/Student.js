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

// const createDoc = async (nm, ag, fe, hob, isAct, comm) => {
//   try {
//     //creating schema
//     // const studentDoc = new studentModel({
//     //   name: "Soumya",
//     //   age: 24,
//     //   fees: 5900.0,
//     //   hobbies: ["singing", "dancing", "teaching"],
//     //   isActive: true,
//     //   comments: [{ value: "Mongoose is good" }],
//     // });
//     const studentDoc = new studentModel({
//         name: nm,
//         age: ag,
//         fees: fe,
//         hobbies: hob,
//         isActive: isAct,
//         comments: comm,
//       });

//     //saving document
//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (error) {console.log(error)}
// };

const createMultipleDoc = async () => {
    try {
    //   creating schema
      const rahulDoc = new studentModel({
        name: "Rahul",
        age: 21,
        fees: 5900.0,
        hobbies: ["singing", "dancing", "teaching"],
        isActive: true,
        comments: [{ value: "Mongoose is good" }],
      });
      const aditiDoc = new studentModel({
        name: "Aditi",
        age: 26,
        fees: 5900.0,
        hobbies: ["singing", "dancing", "teaching"],
        isActive: true,
        comments: [{ value: "Mongoose is good" }],
      });
      const priyaDoc = new studentModel({
        name: "Priya",
        age: 23,
        fees: 5900.0,
        hobbies: ["singing", "dancing", "teaching"],
        isActive: true,
        comments: [{ value: "Mongoose is good" }],
      });
      const subhiDoc = new studentModel({
        name: "Shubhi",
        age: 26,
        fees: 5900.0,
        hobbies: ["singing", "dancing", "teaching"],
        isActive: true,
        comments: [{ value: "Mongoose is good" }],
      });
      
      //saving document
      const result = await studentModel.insertMany([rahulDoc, priyaDoc, aditiDoc, subhiDoc]);
      console.log(result);
    } catch (error) {console.log(error)}
  };

  //retrieving all data
  const getAllData = async()=>{
    const result = await studentModel.find();
    // console.log(result);
    result.forEach((item)=>{
      console.log(
        item.name,
        item.age,
        item.fees.toString(),
        item.hobbies[0],
        item.hobbies[1],
        item.hobbies[2],
        item.comments[0].value,
        item.comments[0].publish,
        item.isActive,
        item.join
      )
    })
  }
export { getAllData }