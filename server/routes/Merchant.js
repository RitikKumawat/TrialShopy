const express = require("express");
const { commision, updateCommision } = require("../controllers/merchant");
const { paymentDetails, newPayment } = require("../controllers/payments");

const router = express.Router();

router.get("/:merchantId/commision",commision);


router.put("/:merchantId/commision",updateCommision);

router.get("/:merchantId/payments",paymentDetails);


router.post("/:merchantId/payments",newPayment);


module.exports = router;