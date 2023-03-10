const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bp6sv0i.mongodb.net/simpleDB`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log('Error connecting to database:', err.message);
});

module.exports = mongoose.connection;
