const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');

const authMiddleware = require('../../utils/Middleware');

const AdminController = require('../controller/AdminController');

router.get('/',authMiddleware,AdminController.getAdmin);
router.get('/:_id',authMiddleware,AdminController.getAdminById);
router.get('/:personal_no',authMiddleware,AdminController.getAdminByPersonalNo);
router.post('/login',AdminController.login);
router.post('/register',AdminController.register);
router.put('/:_id',authMiddleware,AdminController.update);
router.delete('/:_id',authMiddleware,AdminController.delete);
router.post('/logout', authMiddleware, AdminController.logout);

module.exports=router;