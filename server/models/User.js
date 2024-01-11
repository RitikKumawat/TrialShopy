const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Seller","Merchant"],
        required:true,
    },
    token:{
        type:String,
    },
    commision:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Commision",
    },
    payments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Payments",
        }
    ]
})

module.exports = mongoose.model("User",userSchema);