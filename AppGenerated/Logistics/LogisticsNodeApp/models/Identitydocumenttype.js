const mongoose = require("mongoose");

const IdentitydocumenttypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  identityDocumentNumber: {
    type: String,
    required: false
  },
  identityDocumentType: {
    type: Number,
    required: false
  },
  identityDocumentIssuer: {
    type: String,
    required: false
  },
  identityDocumentType: {
    type: [{
      Id: {
         type: String,
         required: true
         },
      Name:{
         type: String,
         required: true
         },
    }],
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Identitydocumenttypes", IdentitydocumenttypeScheema);