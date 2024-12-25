const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    const token = req.header('Authorization')
    if(!token) return res.status(401).json({error:"Access Denied"});
    try{
        const decoded = jwt.verify(token,"TOKEN");
        req.userId = decoded.userId
        next()
    }catch(e){
        res.status(401).json({error:"Invalid token"})
    }
}

module.exports = verifyToken;