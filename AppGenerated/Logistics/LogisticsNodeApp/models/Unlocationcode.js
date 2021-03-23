const mongoose = require("mongoose");

const UnlocationcodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Unlocationcodes", UnlocationcodeScheema);