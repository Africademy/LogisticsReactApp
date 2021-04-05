const mongoose = require("mongoose");

const MinimumtemperatureScheema = mongoose.Schema({
  temperatureMeasurementUnitCode: {
    type: String,
    required: true
  },
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Minimumtemperatures", MinimumtemperatureScheema);