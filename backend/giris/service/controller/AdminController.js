const AdminService = require('../services/AdminService');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.login = async (req, res) => {
    try {
        const control = await AdminService.Login(req.body);

        if (control.error) {
            return res.status(400).json({ error: control.error });
        }

        const admin = await AdminService.GetAdminByPersonalNo(req.body.personal_no);
        const admin_id = admin._id;
        const token = jwt.sign({admin_id}, process.env.JWT_SECRET,  { expiresIn: "15m" }); //Token oluşturma.
        
        res.cookie('token',token, {httpOnly:true}); //tokeni res ile gönderirrr
        return res.status(200).json({message:"giris basarili"})
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.register=async(req,res)=>{
    try{
        const admin = await AdminService.Register(req.body);
        if(admin.error){
            return res.status(400).json({ error: admin.error });
        }
        return res.status(200).json(admin);
    }catch(error){
        return res.status(400).json({error:error.message});
    }
};

exports.getAdmin=async(req,res)=>{
    try{
        const admins = await AdminService.GetAdmins();
        return res.status(200).json(admins);
    }catch(error){
        return res.status(400).json({error:error.message});
    }
};

exports.getAdminById = async (req, res) => {
    try {
        const admin = await AdminService.GetAdminById(req.params._id);
        
        if (admin.error) {
            // If there is an error, send a 404 status and the error message
            return res.status(404).json({ error: admin.error });
        }

        // If there is no error, send the admin object
        return res.status(200).json(admin);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.getAdminByPersonalNo=async(req,res)=>{
    try{
        const admin = await AdminService.GetAdminByPersonalNo(req.params.personal_no);
        if (admin.error) {
            // If there is an error, send a 404 status and the error message
            return res.status(404).json({ error: admin.error });
        }
        return res.status(200).json(admin);
    }catch(error){
        return res.status(400).json({error:error.message});
    }
};

exports.update=async(req,res)=>{
    try{
        const admin = await AdminService.Update(req.params._id, req.body);
        if(admin.error){
            return res.status(500).json({ error: admin.error });
        }
        return res.status(200).json(admin);
    }catch(error){
        return res.status(400).json({error:error.message});
    }
};

exports.delete=async(req,res)=>{
    try{
        const admin = await AdminService.Delete(req.params.personal_no);
        return res.status(200).json(admin);
    }catch(error){
        return res.status(400).json({error:error.message});
    }
};

exports.logout = async (req, res) => {
    try {
        res.cookie('token', '', { expires: new Date(0), httpOnly: true, path: '/' });
        return res.status(200).json({message:"basarili"});
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};