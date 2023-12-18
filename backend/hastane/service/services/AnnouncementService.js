const { json } = require('body-parser');
const Announcement = require('../models/AnnouncementModel');
const BloodType = require('../models/BloodTypeModel');
const Hastane = require('../../../giris/service/models/HastaneModel');

class AnnouncementService{

    //Bütün ilanları getirme
    static async getAllAnnouncemenets(){
        try{
            const announcements = await Announcement.find().populate({path:"blood_type",select:"type"});
            return announcements;
        }catch(error){
            return json({error:error.message});
        }
    }

    //Seçili ilanı getirme
    static async getAnnouncemenetById(id){
        try{
            const announcement = await Announcement.findById(id);
            if(!announcement){
                return json({error:"Ilan bulunamadi"});
            }
            return announcement;
        }catch(error){
            return json({error:error.message});
        }
    }

    //Tüm kan tiplerini getirme
    static async getAllBloodTypes(){
        try{
            const blood_types = await BloodType.find();
            return blood_types;
        }catch(error){
            return json({error:error.message});
        }
    }

    //Id'ye göre kan tiplerini getirme
    static async getBloodTypesById(id){
        try{
            const blood_types = await BloodType.findById(id);
            if(!blood_types){
                return json({error:"kan tipi bulunamadi."})
            }
            return blood_types;
        }catch(error){
            return json({error:error.message});
        }
    }

    //İlan ekleme
    static async addAnnouncement(newAnnouncement){
        try{
            const hastane = await Hastane.findById(newAnnouncement.hastane);
            if(!hastane){
                return json({error:"Hastane bulunamadi."});
            }

            const blood_type = await AnnouncementService.getBloodTypesById(newAnnouncement.blood_type);

            if(blood_type.error){
                return json({error:"Kan grubu bulunamadı"}); 
            }

            const newAnn = await Announcement.create({
                title: newAnnouncement.title,
                body: newAnnouncement.body,
                blood_type: blood_type._id,
                hastane: hastane._id
            });

            await newAnn.save();
            return newAnn
        }catch(error){
            return json({error:error.message});
        }
    }

    //İlan güncelle
    static async updateAnnouncementById(id, updateAnnouncement) {
        try {
            const updateAnn = await Announcement.findByIdAndUpdate(id, updateAnnouncement, { new: true });
            return updateAnn;
        } catch (error) {
            return json({error:error.message});
        }
    }

    //İlan silme
    static async deleteAnnouncement(id){
        try{
            const deleteAnn = await Announcement.findByIdAndDelete(id);
            return deleteAnn;
        }catch(error){
            return json({error:error.message});
        }
    }
}

module.exports = AnnouncementService;