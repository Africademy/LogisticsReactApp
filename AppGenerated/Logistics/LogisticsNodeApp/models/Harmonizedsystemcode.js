const mongoose = require("mongoose");

const HarmonizedsystemcodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Harmonizedsystemcodes", HarmonizedsystemcodeScheema);