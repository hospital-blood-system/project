const donorService = require('../services/donorService');

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
    const donorId = req.params.id;
    try {
        const deletedDonor = await donorService.deleteDonorById(donorId);
        res.json(deletedDonor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllDonors,
    getDonorById,
    createDonor,
    updateDonor,
    deleteDonor,
};
