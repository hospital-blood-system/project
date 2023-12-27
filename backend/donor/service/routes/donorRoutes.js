const express = require('express');
const router = express.Router();
const donorController = require('../controller/donorController');

router.get('/', donorController.getAllDonors);
router.get('/:id', donorController.getDonorById);
router.post('/', donorController.createDonor);
router.put('/:id', donorController.updateDonor); 
router.delete('/:id', donorController.deleteDonor);

module.exports = router;