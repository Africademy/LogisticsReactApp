const mongoose = require("mongoose");

const TotalgrossvolumeScheema = mongoose.Schema({
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

module.exports = mongoose.model("Totalgrossvolumes", TotalgrossvolumeScheema);