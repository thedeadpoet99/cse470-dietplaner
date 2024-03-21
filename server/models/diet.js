// models/diet.js

const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
    //unique: true,
  },
  // You can add more fields here to store diet information for the specific date
});

const Diet = mongoose.model('Diet', dietSchema);

module.exports = Diet;
