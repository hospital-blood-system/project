const express = require('express');
const router = express.Router();

const hastaneController = require('../controller/HastaneController');

router.get('/',hastaneController.hastaneler);
router.get('/:_id',hastaneController.getHastaneById);

module.exports = router;