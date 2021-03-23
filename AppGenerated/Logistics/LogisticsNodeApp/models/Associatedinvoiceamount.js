const mongoose = require("mongoose");

const AssociatedinvoiceamountScheema = mongoose.Schema({
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

module.exports = mongoose.model("Associatedinvoiceamounts", AssociatedinvoiceamountScheema);