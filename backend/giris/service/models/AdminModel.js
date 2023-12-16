const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    ad:{
        type:String,
        required:true,
    },
    soyad:{
        type:String,
        required:true,
    },
    personal_no:{
        type:String,
        required:true,
        max:11,
        unique:true
    },
    sifre:{
        type:Object,
        required:true
    },
},{timestamps:true});

module.exports=mongoose.model("Admin",adminSchema);