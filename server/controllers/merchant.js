const Commision = require("../models/Commision");
const User = require("../models/User");

exports.commision= async (req,res)=>{

    
    const merchantId = req.params.merchantId;

    const commisionDetail = await User.findById(merchantId).populate("commission").exec();
    
    return res.status(200).json({
        success:true,
        data:commisionDetail,
    })
}

exports.updateCommision = async (req,res)=>{
    const merchantId = req.params.merchantId;
    const update = req.body;

    const userDetails = await User.findById(merchantId);
    const commisionId = await User.findOne(userDetails?.commision._id);

    const commision = await Commision.findByIdAndUpdate(commisionId,{update});
    await commision.save();
    
    return res.json({
        success:true,
    })
}