const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    payAmount:{
        type:Number,
    }

});

module.exports = mongoose.model("Payments",paymentSchema);