import studentModel from "../models/student.js";

class StudentController {
    static getAllDocs = async (req, res) => {
        try {
            const result = await studentModel.find()
            res.send(result)
        } catch (error) {
            console.log("Error in getting all docs")
        }
        
    }

    static getDocById = async (req, res) => {
        try {
            const result = await studentModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log("Error in getting doc by Id")
        }
        
    }

    static createDoc = async (req, res)=> {
        try {
            const doc = new studentModel(req.body)
            const result = await doc.save();
            res.status(201).send(result)
        } catch (error) {
            console.log("error in creating doc")
        }
    }

    static updateDoc = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
        } catch (error) {
            console.log("Error in updating doc")
        }
    }

    static deleteDoc = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.send(result)
            
        } catch (error) {
            console.log("Error in deleting doc")
        }
    }
}

export default StudentController