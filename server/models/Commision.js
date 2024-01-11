const mongoose = require("mongoose");

const commisionSchema = new mongoose.Schema({
    amount:{
        type:Number,
    }

});

module.exports = mongoose.model("Commision",commisionSchema);