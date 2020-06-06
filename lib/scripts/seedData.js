const mongoose = require('mongoose');
const Decertification = require('../models/Decertification');
const decertification = require('../scrapers/decertification');

require('dotenv').config();
require('../utils/connect')();

async function seedData() {
  const data = await decertification();

  try {
    await Decertification.create(data);
  } catch(error) {
    console.log(error);
  }
}

seedData()
  .then(() => console.log('done'))
  .finally(() => mongoose.connection.close());
