const { json } = require('body-parser');
const Hastane = require('../models/HastaneModel');
const { default: mongoose } = require('mongoose');

class HastaneService{
    static async getAll(){
        try{
            const hastaneler = await Hastane.find();
            return hastaneler;
        }catch(error){
            return json({error:error.message})
        }
    }

    static async getById(_id) {
        try {
            const hastane = await Hastane.findById(_id);
    
            if (!hastane) {
                return { error: "Hastane bulunamadi." };
            }
    
            return hastane;
        } catch (error) {
            throw { error: error.message };
        }
    }
    
}

module.exports=HastaneService;