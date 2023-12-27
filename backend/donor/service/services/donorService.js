const DonorModel = require('../models/donorModel');
const mongoose = require('mongoose');

class DonorService {
    // Tüm bağışçıları getir
    static async getAllDonors() {
        try {
            const donors = await DonorModel.find();
            const donorsWithHospitals = await Promise.all(donors.map(async (donor) => {
                const hastane = await mongoose.connection.collection('hastanes').findOne({ _id: donor.hastane });
                const blood_type = await mongoose.connection.collection('bloodtypes').findOne({ _id: donor.blood_type });
                //const hastaneAd = hastane ? hastane.ad : null;
                return {
                    ad: donor.ad,
                    soyad: donor.soyad,
                    yas: donor.yas,
                    cinsiyet: donor.cinsiyet,
                    blood_type: blood_type.type,
                    hastane:hastane.ad
                };
            }));
            return donorsWithHospitals;
        } catch (error) {
            throw error;
        }
    }

    // ID'ye göre bağışçı getir
    static async getDonorById(id) {
        try {
            const donor = await DonorModel.findById(id);

            const hastane = await mongoose.connection.collection('hastanes').findOne({ _id: donor.hastane });
            const blood_type = await mongoose.connection.collection('bloodtypes').findOne({ _id: donor.blood_type });

            const data = {
                ad:donor.ad,
                soyad:donor.soyad,
                yas: donor.yas,
                cinsiyet: donor.cinsiyet,
                blood_type: blood_type.type,
                hastane:hastane.ad
            }

            return data;
        } catch (error) {
            throw error;
        }
    }

    // Yeni bağışçı ekle
    static async addDonor(newDonor) {
        try {
            console.log(newDonor);
            const hastane = await mongoose.connection.collection('hastanes').findOne({ _id: new mongoose.Types.ObjectId(newDonor.hastane) });
            const blood_type = await mongoose.connection.collection('bloodtypes').findOne({ _id: new mongoose.Types.ObjectId(newDonor.blood_type) });
            
            const savedDonor = await DonorModel.create({
                ad:newDonor.ad,
                soyad:newDonor.soyad,
                yas:newDonor.yas,
                cinsiyet:newDonor.cinsiyet == 1 ? true:false,
                blood_type:blood_type._id,
                hastane:hastane._id,
            });

            return savedDonor;
        } catch (error) {
            throw error;
        }
    }

    // ID'ye göre bağışçı güncelle
    static async updateDonorById(id, updatedDonor) {
        try {
            const hastane = await mongoose.connection.collection('hastanes').findOne({ _id: new mongoose.Types.ObjectId(updatedDonor.hastane) });
            const blood_type = await mongoose.connection.collection('bloodtypes').findOne({ _id: new mongoose.Types.ObjectId(updatedDonor.blood_type) });
    
            const updatedDonor = await DonorModel.findByIdAndUpdate(
                donorId,
                {
                    ad: updatedDonor.ad,
                    soyad: updatedDonor.soyad,
                    yas: updatedDonor.yas,
                    cinsiyet: updatedDonor.cinsiyet == 1 ? true : false,
                    blood_type: blood_type._id,
                    hastane: hastane._id,
                },
                { new: true }
            );
    
            return updatedDonor;
        } catch (error) {
            throw error;
        }
    }

    // ID'ye göre bağışçı sil
   static async deleteDonorById(id) {
        try {
            const deletedDonor = await DonorModel.findByIdAndDelete(id);
            return deletedDonor;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = DonorService;
