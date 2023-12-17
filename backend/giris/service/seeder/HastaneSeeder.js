const Hastane = require('../models/HastaneModel');

module.exports = async()=>{await Hastane.insertMany([
    {
        ad:"Elazığ Arşt.",
        il:"Elazığ",
        ilce:"Merkez"
    },{
        ad:"Elazığ Şehir.",
        il:"Elazığ",
        ilce:"Merkez"
    }
])};