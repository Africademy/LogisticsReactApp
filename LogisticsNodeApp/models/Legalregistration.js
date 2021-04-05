const mongoose = require("mongoose");

const LegalregistrationScheema = mongoose.Schema({
  legalRegistrationNumber: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Legalregistrations", LegalregistrationScheema);