const express=require('express');
const body_parser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const announcement = require('../hastane/service/routes/AnnouncementRoutes');

//DB connection
const db = require('../hastane/config/database');

db();
//const blood_types = require('../hastane/service/seeder/bloodtypeseeder');
//blood_types()
const app=express();

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(cors());

app.use('/announcement',announcement);

app.use('/',(req,res,next)=>{
    return res.status(200).json({
        "message":  "bu alan  hastane servisidir"
    });
})

const PORT = process.env.PORT || 8004;
app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
});