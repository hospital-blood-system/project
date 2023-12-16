const express = require('express');

const router = express.Router();

const AdminController = require('../controller/AdminController');

router.get('/',AdminController.getAdmin);
router.get('/:_id',AdminController.getAdminById);
router.get('/:personal_no',AdminController.getAdminByPersonalNo);
router.post('/login',AdminController.login);
router.post('/register',AdminController.register);
router.put('/:_id',AdminController.update);
router.delete('/:_id',AdminController.delete);

module.exports=router;