const mongoose = require("mongoose");

const SpecialoperatinghourstypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  isOperational: {
    type: Number,
    required: false
  },
  specialDate: {
    type: Date,
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
  specialDateName: {
    type: Number,
    required: false
  },
  specialDateName: {
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

module.exports = mongoose.model("Specialoperatinghourstypes", SpecialoperatinghourstypeScheema);