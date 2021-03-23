const mongoose = require("mongoose");

const TransportequipmenttypecodeScheema = mongoose.Schema({
  codeDescription: {
    type: String,
    required: false
  },
  codeListAgencyCode: {
    type: String,
    required: false
  },
  codeListAgencyCodeListVersion: {
    type: String,
    required: false
  },
  codeListAgencyName: {
    type: String,
    required: false
  },
  codeListName: {
    type: String,
    required: false
  },
  codeListURI: {
    type: String,
    required: false
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

module.exports = mongoose.model("Transportequipmenttypecodes", TransportequipmenttypecodeScheema);