const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BloodTypeModel = new Schema({
    num:{
        type: Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
});

const BloodType = mongoose.model('BloodType',BloodTypeModel); 

module.exports = BloodType;