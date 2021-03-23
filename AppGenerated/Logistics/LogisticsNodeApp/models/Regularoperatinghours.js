const mongoose = require("mongoose");

const RegularoperatinghoursScheema = mongoose.Schema({
  dayOfTheWeekCode: {
    type: String,
    required: true
  },
  isOperational: {
    type: Number,
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

module.exports = mongoose.model("Regularoperatinghourss", RegularoperatinghoursScheema);