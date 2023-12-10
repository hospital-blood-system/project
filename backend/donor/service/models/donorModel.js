const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DonorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    male: {
        type: Boolean,
        required: true
    },
    blood: {
        type: String,
        required: true
    }
});

const DonorModel = mongoose.model('donors', DonorSchema);

module.exports = DonorModel;