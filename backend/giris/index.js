const express = require('express');
const body_parser = require('body-parser');
require('dotenv').config();

const adminRouter = require('../giris/service/routes/AdminRoutes');

const db = require('../giris/config/db');

db();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/admin',adminRouter)

app.use('/',(req,res)=>{
    return res.status(200).json({
        "message":"bu alan Giriş servisidir"
    });
})

const PORT = process.env.PORT || 8002;

app.listen(PORT,()=>{
    console.log(`port ${PORT} listening`);
}); 