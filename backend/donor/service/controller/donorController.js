const donorService = require('../services/donorService');
const DonorModel = require('../models/donorModel');
const mongoose = require('mongoose')

const getAllDonors = async (req, res) => {
    try {
        const donors = await donorService.getAllDonors();
        res.json(donors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDonorById = async (req, res) => {
    const donorId = req.params.id;
    try {
        const donor = await donorService.getDonorById(donorId);
        res.json(donor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDonor = async (req, res) => {
    const donorData = req.body;
    try {
        const newDonor = await donorService.addDonor(donorData);
        res.json(newDonor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDonor = async (req, res) => {
    const donorId = req.params.id;
    const donorData = req.body;

    try {
        const updatedDonor = await donorService.updateDonorById(donorId, donorData);
        res.json(updatedDonor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteDonor = async (req, res) => {
    const donorId = req.params._id;
    try {
        const deletedDonor = await donorService.deleteDonorById(donorId);
        res.json(deletedDonor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ID'ye göre bağışçı getir
const getDonorByBloodId = async (req, res) => {
    try {
        const blood_type = req.params.blood_type;
        console.log("Searching for donors with blood type:", blood_type);

        const donors = await DonorModel.find({ blood_type: new mongoose.Types.ObjectId(blood_type) });
        console.log("Found donors:", donors);

        return res.status(200).json(donors);
    } catch (error) {
        console.error("Error in getDonorByBloodId:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const sendMail = async (req, res) => {
    try {
        const announcement = req.body;
        const response = await donorService.sendMail(announcement);

        return res.status(200).json({ message: "Başarılı." });
    } catch (error) {
        console.error("Error in sendMail:", error);
        throw new Error("Failed to send mail.");
    }
};


module.exports = {
    getAllDonors,
    getDonorById,
    createDonor,
    updateDonor,
    deleteDonor,
    getDonorByBloodId,
    sendMail,
};
