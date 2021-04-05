const mongoose = require("mongoose");

const CurrentholderregistrationScheema = mongoose.Schema({
  identificationSchemeAgencyCode: {
    type: String,
    required: false
  },
  identificationSchemeAgencyCodeCodeListVersion: {
    type: String,
    required: false
  },
  identificationSchemeAgencyName: {
    type: String,
    required: false
  },
  identificationSchemeName: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Currentholderregistrations", CurrentholderregistrationScheema);