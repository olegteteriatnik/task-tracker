const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bp6sv0i.mongodb.net/simpleDB?retryWrites=true&w=majority`;

const db = mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log('Error connecting to database:', err.message);
});

module.exports = db;
