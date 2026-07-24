const express = require("express");
const authController=require("../controllers/auth.controller");

const router = express.Router();

//to acces api we need to use /api/auth/register
// routes to 
router.post("/register", authController.registerUser);



module.exports=router;