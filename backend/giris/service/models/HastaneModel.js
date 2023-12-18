const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HastaneSchema = Schema({
    ad:{
        type:String,
        required:true
    },
    il:{
        type:String,
        required:true
    },
    ilce:{
        type:String,
        required:true
    },
    calisanlar:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin',
        required:false,
    }],
    donorler:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'donors',
        required:false,
    }]
},{timestamps:true});

module.exports=mongoose.model('Hastane',HastaneSchema);