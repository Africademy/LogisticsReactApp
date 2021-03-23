const mongoose = require("mongoose");

const TemperaturerangetypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  maximumTemperature: {
    type: Number,
    required: false
  },
  minimumTemperature: {
    type: Number,
    required: false
  },
  minimumTemperature: {
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
  maximumTemperature: {
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

module.exports = mongoose.model("Temperaturerangetypes", TemperaturerangetypeScheema);