import jwt from "jsonwebtoken"
import userModel from "../models/user.js"

let checkUserAuth = async (req, res, next) => {
    let token;
    const { authorization } = req.headers
    if(authorization && authorization.startsWith("Bearer")){
        try {
            //get token from header
            token = authorization.split(" ")[1]

            //verify token
            const {userID} = jwt.verify(token, process.env.SECRET_KEY)

            //get user from token
            req.user = await userModel.findById(userID).select("-password")

            next();
            // console.log("i am in checkuserauth")

        } catch (error) {
            res.send({"status": "failed", "message": "Unauthorized User"})
        }
        if(!token){
            res.send({"status": "failed", "message": "Unauthorized User, No token"})
        }
    }

    
}

export default checkUserAuth