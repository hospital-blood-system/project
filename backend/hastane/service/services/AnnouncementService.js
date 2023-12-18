const Announcement = require('../models/AnnouncementModel');
const BloodType = require('../models/BloodTypeModel');

class AnnouncementService{

    //Bütün ilanları getirme
    static async getAllAnnouncemenets(){
        try{
            const announcements = await Announcement.find().populate({path:"blood_type",select:"type"});
            return announcements;
        }catch(error){
            throw error;
        }
    }

    //Seçili ilanı getirme
    static async getAnnouncemenetById(id){
        try{
            const announcement = await Announcement.findById(id);
            return announcement;
        }catch(error){
            throw error;
        }
    }

    //Tüm kan tiplerini getirme
    static async getAllBloodTypes(){
        try{
            const blood_types = await BloodType.find();
            return blood_types;
        }catch(error){
            throw error;
        }
    }

    //Id'ye göre kan tiplerini getirme
    static async getBloodTypesById(id){
        try{
            const blood_types = await BloodType.findById(id);
            return blood_types;
        }catch(error){
            throw error;
        }
    }

    //İlan ekleme
    static async addAnnouncement(newAnnouncement){
        try{
            const newAnn = await Announcement.create(newAnnouncement);
            return newAnn;
        }catch(error){
            throw error;
        }
    }

    //İlan güncelle
    static async updateAnnouncementById(id, updateAnnouncement) {
        try {
            const updateAnn = await Announcement.findByIdAndUpdate(id, updateAnnouncement, { new: true });
            return updateAnn;
        } catch (error) {
            throw error;
        }
    }

    //İlan silme
    static async deleteAnnouncement(id){
        try{
            const deleteAnn = await Announcement.findByIdAndDelete(id);
            return deleteAnn;
        }catch(error){
            throw error;
        }
    }
}

module.exports = AnnouncementService;