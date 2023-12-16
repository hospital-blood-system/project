const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const donorRoutes = require('./service/routes/donorRoutes');

app.use(bodyParser.json());

// MongoDB bağlantısını yapılandır
/* mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(err));
 */

const db = require('../donor/config/database');
db()

// API rotalarını ekle
app.use('/api/donors', donorRoutes);

const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
