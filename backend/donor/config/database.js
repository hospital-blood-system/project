// config/database.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://Berat23:jR7C4LOnEdViqoRq@cluster0.xntr36l.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log(`Connected to MongoDB: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
