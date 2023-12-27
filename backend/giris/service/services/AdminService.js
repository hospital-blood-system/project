const { json } = require('body-parser');
const { hash,compare } = require('../../utils/Hash');
const Admin = require('../models/AdminModel');
const Hastane = require('../models/HastaneModel');

class AdminService{

    //Register
    static async Register(admin_register) {
        try {
            const yenisifre = hash(admin_register.sifre);
            const hastane = await Hastane.findById(admin_register.hastane);
            if(!hastane){
                return { error: "Hastane bulunamadı!" };
            }
            const admin = await Admin.create({
                ad: admin_register.ad,
                soyad: admin_register.soyad,
                personal_no: admin_register.personal_no,
                sifre: yenisifre,
                hastane: hastane._id
            });
            if(!admin){
                return { error: "Admin oluşturulamadı!" };
            }
            return admin;
        } catch (error) {
            return { error: error.message };
        }
    }    

    //Login
    static async Login(admin_login){
        try{
            const admin = await Admin.findOne({personal_no:admin_login.personal_no})
            if(!admin){
                return { error: "Admin Bulunamadi!" };
            }
            if(!compare(admin_login.sifre, admin.sifre)){
                return { error: "Sifre Hatali!" };
            }
            return admin;
        }catch(error){
            return { error: error.message };
        }
    }

    //GetAll
    static async GetAdmins(){
        try{
            const admins = await Admin.find().populate({path:'hastane', select:["ad"]});
            return admins;
        }catch(error){
            return json({error:error.message})
        }
    }

    // GetById
    static async GetAdminById(_id) {
        try {
            const admin = await Admin.findById(_id);
            if (!admin) {
                return { error: "Admin bulunamadı!" };
            }
            return admin;
        } catch (error) {
            return { error: error.message };
        }
    }

    //GetByPersonalNp
    static async GetAdminByPersonalNo(personal_no){
        try{
            const admin = await Admin.findOne({personal_no:personal_no});
            if(!admin){
                return json({error:"Admin bulunamadı!"})
            }
            return admin;
        }catch(error){
            return json({error:error.message});
        }
    }

    //Update
    static async Update(id,admin_yeni){
        try{

            const admin_veri = getAdminById(_id);

            if(compare(admin_yeni.sifre_eski != admin_veri.sifre)){
                return json({error: "Sifre dogru degil."});
            }

            admin_yeni.sifre = hash(admin_yeni.sifre);

            const admin = await Admin.findByIdAndUpdate(id, ...admin_yeni);

            if(!admin){
                return json({error: "Admin oluşturulamadı."});
            }

            return admin;
        }catch(error){
            return json({error:error.message});
        }
    }

    //Delete
    static async Delete(_id){
        try{
            const admin = await Admin.findByIdAndDelete(_id);
            return admin;
        }catch(error){
            return json({error:error.message});
        }
    }
}

module.exports = AdminService;