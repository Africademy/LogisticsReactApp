const mongoose = require("mongoose");

const GeographicalcoordinatesScheema = mongoose.Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Geographicalcoordinatess", GeographicalcoordinatesScheema);