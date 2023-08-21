const mongoose = require('mongoose');
const mongoURL= "mongodb://127.0.0.1/crud";
const connectToMongo=async()=>{
    try{
        await mongoose.connect(mongoURL)
        console.log("connect to mongo successfull");
    }
    catch(err){
        console.log("connect to mongo Unsuccessfull",err);
    }

}
module.exports=connectToMongo;