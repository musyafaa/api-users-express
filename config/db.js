// getting-started.js
const mongoose = require('mongoose');


const mongoDb = async function main() {
  await mongoose.connect('mongodb://localhost:27017/praktik-kk4c');
  console.log('DB is connect')
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

module.exports = mongoDb