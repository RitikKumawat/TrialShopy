const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async(req,res)=>{
    try {
        const {email,password} = req.body;


        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required, please try again"
            })
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered, please signup first"
            })
        }

        const match = await bcrypt.compare(password,user.password);
        if(match){
            const payload = {
                email: user.email ,
                id:user._id,
                accountType:user.accountType,
            }
            const JWT_SECRET = "trialShopy@merchant"
            const token = jwt.sign(payload,JWT_SECRET,{
                expiresIn:"24h",
            });
            user.token = token;
            user.password = undefined;

        const options={
            expires: new Date(Date.now()+ 3*24*60*60*1000),
            httpOnly:true,
        }
        res.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user,
            message:"Logged in successfully",
        })
    }
    else{
        return res.status(401).json({
            success:false,
            message:"Password is incorrect",
        })
    }

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure, please try again",
        })
    }
}


exports.logout = async(req,res)=>{

    localStorage.removeItem("token");
    localStorage.removeItem("user");

}

exports.session = async (req,res)=>{
    const {email} = req.body;
    const userDetails = await User.findOne({email});
    
    return res.status(200).json({
        success:true,
        data:userDetails,
    })
}