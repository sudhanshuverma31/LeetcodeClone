const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log('Connected to DB');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1); // Exit if DB connection fails
  }
};

module.exports = connectDB;
