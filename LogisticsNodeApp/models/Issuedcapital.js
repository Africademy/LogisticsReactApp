const mongoose = require("mongoose");

const IssuedcapitalScheema = mongoose.Schema({
  currencyCode: {
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

module.exports = mongoose.model("Issuedcapitals", IssuedcapitalScheema);