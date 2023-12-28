const Announcement = require('../../../hastane/service/models/AnnouncementModel');
const DonorModel = require('../models/donorModel');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer')

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
                    _id:donor._id,
                    ad: donor.ad,
                    soyad: donor.soyad,
                    yas: donor.yas,
                    cinsiyet: donor.cinsiyet,
                    iletisim: donor.iletisim,
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
                iletisim:newDonor.iletisim,
                blood_type:blood_type._id,
                hastane:hastane._id,
            });

            return savedDonor;
        } catch (error) {
            throw error;
        }
    }

    // ID'ye göre bağışçı güncelle
    static async updateDonorById(id, updatDonor) {
        try {
            const updatedDonor = await DonorModel.findByIdAndUpdate(
                id,
                {
                    ad: updatDonor.ad,
                    soyad: updatDonor.soyad,
                    yas: updatDonor.yas,
                    iletisim: updatDonor.iletisim,
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
            const deletedDonor = await DonorModel.findByIdAndDelete(new mongoose.Types.ObjectId(id));
            return deletedDonor;
        } catch (error) {
            throw error;
        }
    }

    static async getDonorByBloodId(blood_type) {
        try {

            const donors = await DonorModel.find({ blood_type: new mongoose.Types.ObjectId(blood_type) });

            return res.status(200).json(donors);
        } catch (error) {
            console.error("Error in getDonorByBloodId:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }


    //Mail gönder
    static async sendMail(title, body, blood_type) {
        try {
            // Assuming getDonorByBloodId is a synchronous function
            const donors = await DonorModel.find({ blood_type: new mongoose.Types.ObjectId(blood_type) });  
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'hospitalbloodsystem@gmail.com',
                    pass: 'qdydhzwharhkfemh'
                }
            });

            donors.forEach(donor => {
                if (donor.iletisim !== null) {
                    let mailOptions = { 
                        from: 'hospitalbloodsystem@gmail.com',
                        to: `${donor.iletisim}`,
                        subject:`${title}`,
                        text: `${body}`   
                    };

                    transporter.sendMail(mailOptions, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Mail gönderildi');
                        }
                    });
                }
            });
        } catch (error) {
            throw error;
        }
    }



}


module.exports = DonorService;
