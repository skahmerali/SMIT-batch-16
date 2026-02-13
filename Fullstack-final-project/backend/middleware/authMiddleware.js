const User = require("../model/authModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const auth = async (req , res, next)=>{
    try{
        const token = req.cookies.token
        if(!token){
            return res.send({message : "session expired"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select('-password')
        next()

    }catch(err){
        return res.status(500).send({
            message: " failed internal err",
            err: err.message
        })
    }
}
module.exports = auth