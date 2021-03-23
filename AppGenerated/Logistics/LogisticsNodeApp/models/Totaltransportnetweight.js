const mongoose = require("mongoose");

const TotaltransportnetweightScheema = mongoose.Schema({
  measurementUnitCode: {
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

module.exports = mongoose.model("Totaltransportnetweights", TotaltransportnetweightScheema);