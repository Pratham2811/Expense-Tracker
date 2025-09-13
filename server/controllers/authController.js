import jwt from "jsonwebtoken"
import User from "../models/User.js"

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SCERET,{expiresIn:'10min'})
};

export const registerUser=async(req,res)=>{

    const {fullname,email,password}=req.body;
    if(!fullname||!email||!password){
        return res.status(400).json({message:"All fields are required"})

    }

    try{
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email already in use"})
        }

        const user=await User.create({
            fullname,
            email,
            password,
        })
    }
}
export const loginUser=async(req,res)=>{}
export const getUserInfo=async(req,res)=>{}