const jwt = require("jsonwebtoken");
const User = require('../models/User');


const JWT_SECRET=  "trialShopy@merchant"

exports.auth = async (req,res,next)=>{
    try {
        //extract token
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");
        //if token missing
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            });
        }
        //Verify the token
        try {
            const decode = await jwt.verify(token,JWT_SECRET);
            console.log(decode);
            req.user = decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token is invalid",
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success:false,
            message:"Error Occurred while validating token"
        })
    }
}
