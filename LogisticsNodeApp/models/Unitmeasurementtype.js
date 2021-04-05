const mongoose = require("mongoose");

const UnitmeasurementtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  measurementType: {
    type: Number,
    required: false
  },
  measurementValue: {
    type: Number,
    required: false
  },
  measurementValue: {
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

module.exports = mongoose.model("Unitmeasurementtypes", UnitmeasurementtypeScheema);