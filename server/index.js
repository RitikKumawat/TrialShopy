const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const database = require("./config/database");
const userRoutes = require("./routes/User");
const merchantRoutes = require("./routes/Merchant");
const PORT = 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/merchants",merchantRoutes);



app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is up and running..."
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at PORT ${PORT}`);
})