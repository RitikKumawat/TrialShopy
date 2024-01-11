const express = require("express");
const { login, logout, session } = require("../controllers/Auth");


const router = express.Router();

router.post("/login",login);
router.post("/logout",logout);
router.get("/session",session);


module.exports = router;