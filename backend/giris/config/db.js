const mongoose = require('mongoose');
require('dotenv').config();

const db = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
        console.log('DB connected!');
    }catch(error){
        console.log(error);
    }
}

module.exports=db;