const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
        console.log("DB connected!");
    }catch(error){
        console.log(error.message);
    }
}

module.exports = connectDB;