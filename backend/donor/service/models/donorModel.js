const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DonorSchema = new Schema({
    ad: {
        type: String,
        required: false
    },
    soyad: {
        type: String,
        required: false
    },
    iletisim: {
        type: String,
        required: true
    },
    yas: {
        type: Number,
        required: false 
    },
    cinsiyet: {
        type: Boolean,
        required: false
    },
    blood_type: {
        type: Schema.Types.ObjectId,
        required: false
    },
    hastane: {
        type: Schema.Types.ObjectId,
        required: false
    }
});

const DonorModel = mongoose.model('donors', DonorSchema);

module.exports = DonorModel;