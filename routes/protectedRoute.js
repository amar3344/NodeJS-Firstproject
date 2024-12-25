const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/",verifyToken,(req,res)=>{
    res.status(200).json({message : "protected route accesed"})
})

module.exports = router