const mongoose = require("mongoose");

const ContactinformationScheema = mongoose.Schema({
  Contact: {
    type: String,
    required: true
  },
  EmailAddress: {
    type: String,
    required: false
  },
  FaxNumber: {
    type: String,
    required: false
  },
  TelephoneNumber: {
    type: String,
    required: false
  },
  ContactTypeIdentifier: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Contactinformations", ContactinformationScheema);