const User = require("../models/user.login.modal")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registration = async(request,response) => {
    try{
        const {userName,password} = request.body
        const hashedPassword = await bcrypt.hash(password,5)
        const user = User({userName:userName,password:hashedPassword});
        await user.save();
        const token = jwt.sign({userId : user._id },'your_token',{expiresIn:'1Hour'})
        response.status(201).json({message: "User registered successfully",token})
    }catch(error){
        response.status(500).json({message:"User Registration Failed"})
    }
}

const login = async(request,response)=>{
    try{
        const {userName,password} = request.body
        const user = await User.findOne({userName})
        if(!user){
            return response.status(404).json({message : 'user not found'})
        }
        const isMatchPassword = await bcrypt.compare(password,user.password)
        if(!isMatchPassword){
            return response.status(401).json({message : "password inValid"})
        }
        const token = jwt.sign({userId : user._id}, "token")
        response.status(200).json({userData:user,token:token}) 
    }catch(e){
        response.status(500).json({message:"login failed"})
    }
}

module.exports = {
    registration,
    login
}