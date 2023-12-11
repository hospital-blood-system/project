const BloodType = require('../models/BloodTypeModel');

module.exports = async()=>{await BloodType.insertMany([
    {
        num:1,
        type: "Arh+"
    },{
        num:2,
        type: "Brh+"
    },{
        num:3,
        type: "ABrh+"
    },{
        num:4,
        type: "0rh+"
    },{
        num:5,
        type: "Arh-"
    },{
        num:6,
        type: "Brh-"
    },{
        num:7,
        type: "ABrh-"
    },{
        num:8,
        type: "0rh-"
    },
])};