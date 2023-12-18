const Hastane = require('../models/HastaneModel');

class HastaneService{
    static async getAll(){
        try{
            const hastaneler = await Hastane.find();
            return hastaneler;
        }catch(error){
            return json({error:error.message})
        }
    }
}

module.exports=HastaneService;