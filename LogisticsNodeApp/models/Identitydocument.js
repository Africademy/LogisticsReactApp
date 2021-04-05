const mongoose = require("mongoose");

const IdentitydocumentScheema = mongoose.Schema({
  identityDocumentNumber: {
    type: String,
    required: true
  },
  identityDocumentIssuer: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Identitydocuments", IdentitydocumentScheema);