const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const MONGODB_URI = 'mongodb+srv://olegteteriatnik:Pass321@cluster0.bp6sv0i.mongodb.net/?retryWrites=true&w=majority';

const db = mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log('Error connecting to database:', err.message);
});

module.exports = db;
