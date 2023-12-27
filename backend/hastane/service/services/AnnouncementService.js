const Announcement = require('../models/AnnouncementModel');
const BloodType = require('../models/BloodTypeModel');
const mongoose = require('mongoose');

class AnnouncementService{

    //Bütün ilanları getirme
    static async getAllAnnouncemenets(){
        try{
            const announcements = await Announcement.find().populate({ path: "blood_type", select: "type" });
            const hastane = await mongoose.connection.collection('hastanes').findOne({ _id: announcements[0].hastane });

            const data = announcements.map(announcement => ({
                id: announcement._id,
                title: announcement.title,
                body: announcement.body,
                blood_type: announcement.blood_type.type,
                hastane: hastane.ad,
            }));

            return data;

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
    static async addAnnouncement(newAnnouncement) {
        try {
           
            const newAnn = await mongoose.model('Announcement').create(newAnnouncement);
            const hastaneId = newAnn.hastane && newAnn.hastane._id;

            const hastaneInfo = await mongoose.connection.collection('hastanes').findOne({ _id: hastaneId });

            if (!hastaneInfo) {
                throw new Error('Hastane bulunamadı.');
            }
            newAnn.hastane = hastaneInfo;

            await newAnn.save();

            return newAnn;
        } 
        catch (error) {
            throw error;
        }
    }

    //İlan güncelle
    static async updateAnnouncementById(id, updatedAnnouncement) {
        try {
          console.log("Updated Announcement:", updatedAnnouncement); // Kontrol için log ekle
      
          //const { hastaneId, bloodTypeId, ...rest } = updatedAnnouncement;
      
          /* if (!bloodTypeId || !hastaneId) {
            throw new Error('Blood type veya hastane değeri uygun değil.');
          }
          console.log(hastaneId); */
          console.log(updatedAnnouncement);

          const hastane = await mongoose.connection.collection('hastanes').findOne({ _id: new mongoose.Types.ObjectId(updatedAnnouncement.hastane) });
          const blood_type = await mongoose.connection.collection('bloodtypes').findOne({ _id: new mongoose.Types.ObjectId(updatedAnnouncement.blood_type) });
          
          const updatedAnnouncementDoc = await Announcement.findByIdAndUpdate(
            id,
            {
              title:updatedAnnouncement.title,
              body:updatedAnnouncement.body,
              blood_type: blood_type._id,
              hastane: hastane._id,
            },
            { new: true }
          );
      
          return updatedAnnouncementDoc;
        } catch (error) {
          throw error;
        }
      };
    //İlan silme
    static async deleteAnnouncement(id) {
        try {

            if (!id) {
                throw new Error('ID belirtilmedi.');
            }
            // Silinecek ilanı bul
            const deleteAnn = await Announcement.findById(id);
    
            if (!deleteAnn) {
                throw new Error('Silinecek ilan bulunamadı.');
            }
    
            // İlanın bağlı olduğu hastaneyi bul
            const hastane = await mongoose.connection.collection('hastanes').findOne({ _id: deleteAnn.hastane });
    
            if (!hastane) {
                throw new Error('İlanın bağlı olduğu hastane bulunamadı.');
            }
    
            // İlanı sil
            await deleteAnn.remove();
    
            return {
                message: 'İlan başarıyla silindi.',
                deletedAnnouncement: {
                    title: deleteAnn.title,
                    body: deleteAnn.body,
                    blood_type: deleteAnn.blood_type.type,
                    hastane: hastane.ad,
                },
            };
        } catch (error) {
            throw error;
        }
    }
}
module.exports = AnnouncementService;