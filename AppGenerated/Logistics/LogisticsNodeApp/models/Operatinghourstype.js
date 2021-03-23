const mongoose = require("mongoose");

const OperatinghourstypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  dayOfTheWeekCode: {
    type: Number,
    required: false
  },
  isOperational: {
    type: Number,
    required: false
  },
  closingTime: {
    type: Date,
    required: false
  },
  openingTime: {
    type: Date,
    required: false
  },
  dayOfTheWeekCode: {
    type: [{
      Id: {
         type: String,
         required: true
         },
      Name:{
         type: String,
         required: true
         },
    }],
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Operatinghourstypes", OperatinghourstypeScheema);