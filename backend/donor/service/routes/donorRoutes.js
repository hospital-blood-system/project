const express = require('express');
const router = express.Router();
const donorController = require('../controller/donorController');

router.get('/', donorController.getAllDonors);
router.get('/:id', donorController.getDonorById);
router.get('/blood_type/:blood_type', donorController.getDonorByBloodId);
router.post('/', donorController.createDonor);
router.post('/mail', donorController.sendMail);
router.put('/:id', donorController.updateDonor); 
router.delete('/:id', donorController.deleteDonor);

module.exports = router;