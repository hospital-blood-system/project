const AdminService = require('../services/AdminService');

exports.login = async(req,res)=>{
    const admin = req.body
    try{
        const admin_ = await AdminService.Login(admin);
        res.status(200).json(admin_);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.register=async(req,res)=>{
    try{
        admin = await AdminService.Register(req.body);
        if(!admin){
            res.status(400).json({message:"Oluşturulamadı."});
        }
        res.status(200).json(admin);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.getAdmin=async(req,res)=>{
    try{
        const admins = await AdminService.GetAdmins();
        res.status(200).json(admins);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.getAdminById=async(req,res)=>{
    try{
        const admin = await AdminService.GetAdminById(req.params._id);
        res.status(200).json(admin);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.getAdminById=async(req,res)=>{
    try{
        const admin = await AdminService.GetAdminById(req.params._id);
        res.status(200).json(admin);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.getAdminByPersonalNo=async(req,res)=>{
    try{
        const admin = await AdminService.GetAdminByPersonalNo(req.params.personal_no);
        res.status(200).json(admin);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.update=async(req,res)=>{
    try{
        const admin = await AdminService.Update(req.params._id, req.body);
        res.status(200).json(admin);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.delete=async(req,res)=>{
    try{
        const admin = await AdminService.Delete(req.params.personal_no);
        res.status(200).json(admin);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};