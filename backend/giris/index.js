const express = require('express');
const body_parser = require('body-parser');
require('dotenv').config();
const cookieParaser = require("cookie-parser");
const mongoStore = require('connect-mongo');
const session = require("express-session");
const methodOverride = require("method-override");
const cors = require("cors");
const adminRouter = require('../giris/service/routes/AdminRoutes');
const hastaneRouter = require('../giris/service/routes/HastaneRoutes');

const db = require('../giris/config/db');

db();

//const hastaneSeeder = require("../giris/service/seeder/HastaneSeeder");
//hastaneSeeder();

const app = express();

app.use(express.static('public'));
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cors());

app.use(cookieParaser());
app.use(session({
    secret: "keyboard cat",
    resave:false,
    saveUninitialized:true,
    store:mongoStore.create({
        mongoUrl:process.env.MONGO_URL
    }),
}));


app.use(methodOverride('_method'));

app.use('/admin',adminRouter)
app.use('/hastane',hastaneRouter)

app.use('/',(req,res)=>{
    return res.status(200).json({
        "message":"bu alan Giriş servisidir"
    });
})

const PORT = process.env.PORT || 8002;

app.listen(PORT,()=>{
    console.log(`port ${PORT} listening`);
}); 