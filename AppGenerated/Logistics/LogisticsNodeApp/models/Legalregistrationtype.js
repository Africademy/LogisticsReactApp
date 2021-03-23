const mongoose = require("mongoose");

const LegalregistrationtypeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Legalregistrationtypes", LegalregistrationtypeScheema);