import user from "../models/user.js";
import userSchema from "../models/user.js"
import bcrypt from "bcryptjs";
import { getToken } from "../utils/token.js"

const userControler = {
create: async (req, res)=>{
    try {
        const {name, email, password, Vpassword} = req.body
        const encryptedPW = await bcrypt.hash(password, 8)
        const newuser = new userSchema({name, email, password: encryptedPW, Vpassword});
        const userCreate = await newuser.save()
        res.status(201).json({allOk: true, message: "info created", data: userCreate})
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error creating info",
            data: error.message
        })
    }
},
readAll: async (req, res)=>{
    try {
        const users = await userSchema.find()
        res.status(200).json({
            allOk: true,
            message: `all users are showed `,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error reading all users",
            data: error.message
        })
    }
},
loginUser: async (req, res)=>{
    try {
        const { email, password } = req.body
        const foundUser = await userSchema.findOne({email});
        console.log("user:", foundUser);
        const validPW = await bcrypt.compare(password, foundUser.password)
        if (foundUser && validPW) {
            const token = await getToken({
                id: foundUser._id,
                name: foundUser.name,
                email: foundUser.email
            })
            console.log("token:", token);
            res.status(200).json({
            allOk: true, 
            message: "user found", 
            data: foundUser,
            data: token
            })
        } else {
            res.status(401).json({
            allOk: false,
            message: "unauthorized: password invalid or user not found",
            data: null
            })
        }
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error creating info",
            data: error.message
        })
    }
}
}

export default userControler