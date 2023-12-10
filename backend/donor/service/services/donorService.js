const DonorModel = require('../models/donorModel');

class DonorService {
    // Tüm bağışçıları getir
    static async getAllDonors() {
        try {
            const donors = await DonorModel.find();
            return donors;
        } catch (error) {
            throw error;
        }
    }

    // ID'ye göre bağışçı getir
    static async getDonorById(id) {
        try {
            const donor = await DonorModel.findById(id);
            return donor;
        } catch (error) {
            throw error;
        }
    }

    // Yeni bağışçı ekle
    static async addDonor(newDonor) {
        try {
            const savedDonor = await DonorModel.create(newDonor);
            return savedDonor;
        } catch (error) {
            throw error;
        }
    }

    // ID'ye göre bağışçı güncelle
    static async updateDonorById(id, updatedDonor) {
        try {
            const donor = await DonorModel.findByIdAndUpdate(id, updatedDonor, { new: true });
            return donor;
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
