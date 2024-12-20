const User = require("../models/user.login.modal")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registration = async(request,response) => {
    try{
        const {userName,password} = request.body
        const hashedPassword = await bcrypt.hash(password,5)
        const user = User({userName:userName,password:hashedPassword});
        const userCreated = await user.save();
        response.status(201).json({message: "User registered successfully", userCreated})
    }catch(error){
        console.log("user",error.message)
    }
}

module.exports = {
    registration
}