const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnnouncementModel = new Schema({
    title:{
        type:String,
        required:true,
        validate: {
            validator: function(value) {
              return value.length >= 4;
            },
            message: 'Başlık minimum 4 karakter olmalıdır.',
        }
    },
    body:{
        type:String,
        required:true
    },
    blood_type:{
        type: Schema.Types.ObjectId,
        ref:"BloodType",
        required:true,
    },
    hastane:{
        type: Schema.Types.ObjectId,
        ref:"Hastane",
        required:true,
    }
},{timestamps:true});

const Announcement = mongoose.model('Announcement',AnnouncementModel);

module.exports=Announcement;