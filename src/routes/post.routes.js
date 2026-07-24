const express=require("express");
const jwt=require("jsonwebtoken");

const router=express.Router();

router.post("/createpost", (req, res)=>{

    const token=req.cookies.jwt;
    console.log(token);
    if(!token){
        return res.status(401).json({
            message: "unauthorized"
        });
    }
    try{
        jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
        return res.status(401).json({
            message: "unauthorized"
        });
    }

    res.status(201).json({
        message: "post created succesfully"
    })
})

module.exports=router