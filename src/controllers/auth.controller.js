const userModel=require("../models/user.model");
const jwt=require("jsonwebtoken");

//actually this function is a controller function which will be called when user will hit the register api
async function registerUser(req, res){
    const data=req.body;
    const email=data.email;

    const userExists=await userModel.findOne({
        email: email
    })
    
    //if user already exists then return error
    if(userExists){
        return res.status(409).json({
            message: "user already exists"
        })
    }
    
    const user=await userModel.create({
        username: data.username,
        email: data.email,
        password: data.password
    })

    const token=jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, {expiresIn: "1d"})

    res.cookie("jwt", token);

    res.status(201).json({
        message: "user registered successfully",
    })
}

module.exports={registerUser};