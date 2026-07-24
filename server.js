require('dotenv').config();
const app=require('./src/app.js');
const connectDB=require("./src/db/db.js");
const port=process.env.PORT || 4000;

connectDB();


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})