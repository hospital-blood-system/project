const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DonorSchema = new Schema({
    ad: {
        type: String,
        required: true
    },
    soyad: {
        type: String,
        required: true
    },
    iletisim: {
        type: String,
        required: true
    },
    yas: {
        type: Number,
        required: true
    },
    cinsiyet: {
        type: Boolean,
        required: true
    },
    blood_type: {
        type: Schema.Types.ObjectId,
        required: true
    },
    hastane: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

const DonorModel = mongoose.model('donors', DonorSchema);

module.exports = DonorModel;