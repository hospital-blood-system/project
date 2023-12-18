const AnnouncementService = require('../services/AnnouncementService');

const getAnnouncements = async(req,res)=>{
    try{
        const announcements = await AnnouncementService.getAllAnnouncemenets();
        res.status(200).json(announcements);
    }catch(error){
        res.status(400).json({message:error.message}); 
    }
};

const getBloodTypes = async(req,res)=>{
    try{
        const blood_types = await AnnouncementService.getAllBloodTypes();
        res.status(200).json(blood_types);
    }catch(error){
        res.status(400).json({message:error.message}); 
    }
};

const getAnnouncementById = async(req,res)=>{
    try{
        const announcement = await AnnouncementService.getAnnouncemenetById(req.params._id);
        if(!announcement){
            res.status(400).json({message:"İlan bulunamadi!"});    
        }
        res.status(200).json(announcement);
    }catch(error){
        res.status(400).json({message:error.message}); 
    }
};

const addAnnouncement = async(req,res)=>{
    const announcementData = req.body;
    try{

        const blood_type = await AnnouncementService.getBloodTypesById(req.body.blood_type);

        if(!blood_type){
            res.status(400).json({message:"Kan tipi bulunamadi!"}); 
        }

        const announcement = await AnnouncementService.addAnnouncement(announcementData);

        if(!announcement){
            res.status(500).json({message:"Initial server error"});
        }

        res.status(200).json(announcement);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const updateAnnouncement = async(req,res)=>{

    const announcementData = req.body;
    const announcementId = req.params._id;

    try{

        const announcement = await AnnouncementService.getAnnouncemenetById(announcementId);

        if(!announcement){
            res.status(400).json({message:"İlan bulunamadi!"}); 
        }

        const updateAnnouncement = await AnnouncementService.updateAnnouncementById(announcementId,announcementData);
        
        if(!updateAnnouncement){
            res.status(500).json({message:"Initial server error"});
        }

        res.status(200).json(updateAnnouncement);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const deleteAnnouncement = async(req,res)=>{
    const announcementId = req.params._id;
    try{

        const deleteAnnouncement = await AnnouncementService.deleteAnnouncement(announcementId);

        if(!deleteAnnouncement){
            res.status(400).json({message:"İlan bulunamadi!"}); 
        }

       

        res.status(200).json({message:"Basarili"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

module.exports = {
    getAnnouncements,
    getBloodTypes,
    getAnnouncementById,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
};
