const mongoose = require('mongoose');
const Decertification = require('../models/Decertification');

require('dotenv').config();
require('../utils/connect')();

async function seedData() {
  try {
    await Decertification.create();
  } catch(error) {
    console.log(error);
  }
}

seedData()
  .then(() => console.log('done'))
  .finally(() => mongoose.connection.close());
