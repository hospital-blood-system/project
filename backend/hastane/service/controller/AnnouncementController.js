const AnnouncementService = require('../services/AnnouncementService');

const getAnnouncements = async(req,res)=>{
    try{
        const announcements = await AnnouncementService.getAllAnnouncemenets();
        res.status(200).json(announcements);
    }catch(error){
        res.status(400).json({error:error.message}); 
    }
};

const getBloodTypes = async(req,res)=>{
    try{
        const blood_types = await AnnouncementService.getAllBloodTypes();
        res.status(200).json(blood_types);
    }catch(error){
        res.status(400).json({error:error.message}); 
    }
};

const getAnnouncementById = async(req,res)=>{
    try{
        const announcement = await AnnouncementService.getAnnouncemenetById(req.params._id);
        if(announcement.error){
            res.status(400).json({error:announcement.error});    
        }
        res.status(200).json(announcement);
    }catch(error){
        res.status(400).json({error:error.message}); 
    }
};

const addAnnouncement = async(req,res)=>{
    try{
        const announcementData = req.body;

        const announcement = await AnnouncementService.addAnnouncement(announcementData);

        if(announcement.error){
            res.status(500).json({error:announcement.error});
        }
        console.log(announcement);
        res.status(200).json(announcement);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

const updateAnnouncement = async (req, res) => {
    const announcementData = req.body;
    const announcementId = req.params._id;
  
    try {
      const announcement = await AnnouncementService.updateAnnouncementById(announcementId, announcementData);
  
      if (!announcement) {
        res.status(400).json({ error: "İlan bulunamadı!" });
      }
  
      /* const updatedAnnouncement = await AnnouncementService.updateAnnouncementById(announcementId, announcementData);
  
      if (!updatedAnnouncement) {
        res.status(500).json({ error: "Initial server error" });
      } */
  
      res.status(200).json(announcement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const deleteAnnouncement = async(req,res)=>{
    const announcementId = req.params._id;
    try{

        const deleteAnnouncement = await AnnouncementService.deleteAnnouncement(announcementId);

        if(!deleteAnnouncement){
            res.status(400).json({error:"İlan bulunamadi!"}); 
        }

       

        res.status(200).json({message:"Basarili"});
    }catch(error){
        res.status(500).json({error:error.message});
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
