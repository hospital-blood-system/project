const express = require('express');
const router = express.Router();

const hastaneController = require('../controller/HastaneController');

router.get('/',hastaneController.hastaneler);

module.exports = router;