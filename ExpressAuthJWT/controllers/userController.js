import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

class UserController {
    // static homePage = (req, res)=> {
    //     res.send("Home page")
    // }

    // registering user
    static userRegistration = async (req, res) => {
        const {name, email, password, confirm_password, tc} = req.body
        const user = await userModel.findOne({email: email})
        if(user){
            res.send({"status": "failed", "message": "Email already exists"})
        }else{
            if(name && email && password && confirm_password && tc){
               if(password === confirm_password){
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                try {
                    const doc = new userModel({
                        name: name,
                        email: email,
                        password: hashPassword,
                        tc: tc
                    })
                    await doc.save();
                    const saved_user = await userModel.findOne({email: email})
                    //genrating jwt token
                    const token = jwt.sign({userID: saved_user._id}, process.env.SECRET_KEY, { expiresIn: "5d"})
                    res.send({"status": "success", "message": "Registeration Successfull", "token": token})  
                } catch (error) {
                    res.send({"status": "failed", "message": "Unable to register"})
                }
               }else{
                res.send({"status": "failed", "messages": "Password and confirm password doesn't match"})
               }
            }else{
                res.send({"status": "failed", "message": "All fields are required"})
            }
        }
    }
    //login user
    static userLogin = async (req, res) => {
        try {
            const { email, password } = req.body
            if(email && password){
                const user = await userModel.findOne({email: email})
                if(user !== null){
                const isMatch = await bcrypt.compare(password, user.password)
                    if(email == user.email && isMatch){
                        const token = jwt.sign({userID: user._id}, process.env.SECRET_KEY, {expiresIn: "5d"})
                        res.send({"status": "Success", "message": "Login Successfull", "token": token})
                      }else{
                          res.send({"status": "failed", "messages": "Email or Password is not valid"})
                      }
                }else{
                    res.send({"status": "failed", "message": "You are not valid user"})
                }
            }else{
                res.send({"status": "falied", "message": "All fields are required"})
            }
        } catch (error) {
            res.send({"status": "failed", "message": "Unable to login"})
        }
       
    }

    //changeUserPassword
    static changeUserPassword = async (req, res) => {
        const {password, confirm_password} = req.body
        if(password && confirm_password){
            if(password === confirm_password){
                const salt = await bcrypt.genSalt(10)
                const newHashPassword = await bcrypt.hash(password, salt)
            //    console.log(req.user._id)
               await userModel.findByIdAndUpdate(req.user._id, {$set: {password: newHashPassword}})
               res.send({"status": "Success", "message": "Password changed successfully"})
            }else{
                res.send({"status": "failed", "message": "New Password and confirm Password doesn't match"})
            }
        }else{
            res.send({"status": "failed", "message": "All fields are required"})
        }""
    }
    //getting logged-in user details
    static loggedUser = (req, res) => {
        res.send({"user": req.user})
    }

    static sendResetPasswordEmail = async (req, res) => {
        const { email } = req.body 
        if(email){
           const user = await userModel.findOne({email: email})
           const secret = user._id + process.env.SECRET_KEY
           if(user){
             const token = jwt.sign({userID : user._id}, secret , {expiresIn: "15m"})
             const link = `https://127.0.0.1:8000/api/user/reset/${user._id}/${token}`
             console.log(link)
             res.send({"status": "Success", "message": "Password reset email send...Check your email"})
           }else{
            res.send({"status": "failed", "message": "Email doesn't exist"})
           }
        }else{
            res.send({"status": "failed", "message": "Email is required"})
        }
    }

    static resetPassword = async (req, res) => {
        const {password , confirm_password} = req.body
        const {id, token} = req.params
        const user = await userModel.findById(id)
        const new_secret = user._id + process.env.SECRET_KEY
        try {
            jwt.verify(token, new_secret)
            if(password && confirm_password){
                if(password === confirm_password){
                    const salt = await bcrypt.genSalt(10)
                    const newHashPassword = await bcrypt.hash(password, salt)
                    await userModel.findByIdAndUpdate(user._id, {$set: {password: newHashPassword}})
                    res.send({"status": "success", "message": "password changed successfully"})
                }else{
                    res.send({"status": "failed", "message": "New password and confirm password doesn't match"})
                }
            }else{
                res.send({"status": "failed", "message": "all fields are required"})
            }
        } catch (error) {
            res.send({"status": "failed", "message": "Password doesn't change"})
        }
    }
}


export default UserController