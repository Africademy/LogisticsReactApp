const mongoose = require("mongoose");

const PackagingconditioncodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Packagingconditioncodes", PackagingconditioncodeScheema);