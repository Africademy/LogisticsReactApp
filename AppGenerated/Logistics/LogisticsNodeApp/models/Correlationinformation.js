const mongoose = require("mongoose");

const CorrelationinformationScheema = mongoose.Schema({
  RequestingDocumentCreationDateTime: {
    type: Date,
    required: false
  },
  RequestingDocumentInstanceIdentifier: {
    type: String,
    required: false
  },
  ExpectedResponseDateTime: {
    type: Date,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Correlationinformations", CorrelationinformationScheema);