const mongoose=require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to the database");
    }catch(err){
        console.log(err);
        console.log("error in connecting to the database");
    }
}

module.exports=connectDB;