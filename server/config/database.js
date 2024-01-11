const mongoose = require("mongoose");

const mongo_URL = "mongodb://127.0.0.1:27017/trialshopy";
exports.connect = ()=>{
    mongoose.connect(mongo_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("Db connected"))
    .catch((error)=>{
        console.log("Db connection failed");
        console.log(error);
        process.exit(1);
    })
}