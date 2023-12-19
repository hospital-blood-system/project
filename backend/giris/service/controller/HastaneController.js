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

exports.getHastaneById = async(req,res)=>{
    try{    
        const _id = req.params._id;
        const hastane = await HastaneService.getById(_id);
        if(hastane.error){
            return res.status(404).json({error:hastane.error});
        }
        return res.status(200).json(hastane);
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}