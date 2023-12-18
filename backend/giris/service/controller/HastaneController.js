const HastaneService = require('../services/HastaneService');

exports.hastaneler = async(req,res)=>{
    try{    
        const hastaneler = await HastaneService.getAll();
        if(hastaneler.error){
            return res.status(404).json({error:hastaneler.error});
        }
        return res.status(200).json(hastaneler);
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}