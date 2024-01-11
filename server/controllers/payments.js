const User = require("../models/User");
const Payments = require("../models/Payments");
exports.paymentDetails = async(req,res)=>{

    const merchantId = req.params.merchantId;
    const paymentDetails = await User.findById(merchantId).populate("payments");

    return res.json({
        data:paymentDetails,
    })
}

exports.newPayment = async(req,res)=>{
    const merchantId = req.params.merchantId;
    const payDetails = req.body;

    const newPay = await Payments.create({
        payAmount:payDetails
    })

    await User.findByIdAndUpdate(
        {_id:merchantId},
        {
            $push:{
                payments:newPay._id,
            }
        },
        {new:true},
    )
}


