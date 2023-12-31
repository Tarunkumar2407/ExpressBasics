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
  // const getAllData = async()=>{
  //   const result = await studentModel.find();
  //   // console.log(result);
  //   result.forEach((item)=>{
  //     console.log(
  //       item.name,
  //       item.age,
  //       item.fees.toString(),
  //       item.hobbies[0],
  //       item.hobbies[1],
  //       item.hobbies[2],
  //       item.comments[0].value,
  //       item.comments[0].publish,
  //       item.isActive,
  //       item.join
  //     )
  //   })
  // }

  //retrieving specific data which we need including and excluding
  // const getAllData = async () => {
    // to include fields of a documents
    // const result = await studentModel.find().select("name age")
    // const result = await studentModel.find().select(["name", "age"])
    // const result = await studentModel.find().select({name:1, age:1})

    // to exclude fields of a documents
    // const result = await studentModel.find().select("-name -age")
    // const result = await studentModel.find().select(['-name', '-age'])
    // const result = await studentModel.find().select({name: 0, age: 0})

    //
    // console.log(result)
  // } 

  //retrieving unique or one data by unique fields
  // const getAllData = async () => {
    // it returns a object as an reuslt 
    // const result = await studentModel.findById("64d67ba8bb9242ffeb71f51b")
    // console.log(result.name)
    // console.log(result.age)

    //to retrieve by specified field
    // const result = await studentModel.find({name:"Soumya"})
    // console.log(result[0].age)
    // console.log(result[0].fees.toString())
    // console.log(result[0]._id.getTimestamp())

    //to get specific fields by using fields
    // const result = await studentModel.find({name:"Soumya"}).select("name age")
    // console.log(result)  }

    //setting limit to the documents 
    // const result = await studentModel.find().limit(2)
    // const result = await studentModel.find({}, null, {limit: 2})
    // console.log(result)

    //counting the documents 
    // const result = await studentModel.find().count()
    // const result = await studentModel.find().countDocuments()

    //sorting the documents
    // const result = await studentModel.find().sort({age: 1})
    // const result = await studentModel.find().sort({age: -1})

    //mix query for documents
    // const result = await studentModel.find({},{name:1, age:1}, {limit:5, skip:1})

    //comparison operators
    // const result = await studentModel.find({age: {$gt: 25}})
    // const result = await studentModel.find({age: {$gte: 25}})
    // const result = await studentModel.find({age: {$lt: 25}})
    // const result = await studentModel.find({age: {$lte: 25}})
    // const result = await studentModel.find({age: {$ne: 25}})
    // const result = await studentModel.find({age: {$in: [21, 25]}})
    // const result = await studentModel.find({age: {$nin: [21, 25]}})

    // logical operators 
    // const result = await studentModel.find({$and: [{age: 21}, {fees: 5900}]})
    // const result = await studentModel.find({$or: [{age: 24}, {fees: 5000}]})
  //   const result = await studentModel.find({$or: [{age: 24}, {fees: 5000}]})

  //   console.log(result)
  // }

  //update document by findByIdAndUpdate()
  // const updateDoc = async () => {
  //   try {
  //     const result = await studentModel.findByIdAndUpdate("64d67ba8bb9242ffeb71f51b", {name: "Somu"})
  //      console.log(result)
  //   } catch (error) {
  //      console.log(error)
  //   }  
  // }

  //updateOne()
  // const updateDoc = async () => {
  //   try {
  //     const result = await studentModel.updateOne({_id:"64d67ba8bb9242ffeb71f51b"}, {name: "Rahul"})
  //      console.log(result)
  //   } catch (error) {
  //      console.log(error)
  //   }  
  // }

  //updateMany()
  // const updateDoc = async () => {
  //   try {
  //     const result = await studentModel.updateMany({age: 26}, {fees: 5100})
  //      console.log(result)
  //   } catch (error) {
  //      console.log(error)
  //   }  
  // }

  //delete document by findByIdAndDelete()
  // const deleteDoc = async () => {
  //   const result = await studentModel.findByIdAndDelete( "64d6823d8f15472bdddc9971")
  //   console.log(result)
  // }

  //delete document by deleteOne
  // const deleteDoc = async () => {
  //   const result = await studentModel.deleteOne( {_id:"64d6823d8f15472bdddc9973"})
  //   console.log(result)
  // }

  // delete document by deleteMany
  const deleteDoc = async () => {
    const result = await studentModel.deleteMany( {age: 26})
    console.log(result)
  }
export { deleteDoc }