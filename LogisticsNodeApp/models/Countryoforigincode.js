const mongoose = require("mongoose");

const CountryoforigincodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Countryoforigincodes", CountryoforigincodeScheema);