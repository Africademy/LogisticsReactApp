const mongoose = require("mongoose");

const SpecialoperatinghoursScheema = mongoose.Schema({
  isOperational: {
    type: Number,
    required: true
  },
  specialDate: {
    type: String,
    required: true
  },
  closingTime: {
    type: String,
    required: false
  },
  openingTime: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Specialoperatinghourss", SpecialoperatinghoursScheema);