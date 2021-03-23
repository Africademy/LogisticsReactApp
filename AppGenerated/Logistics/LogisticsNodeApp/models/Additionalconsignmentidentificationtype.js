const mongoose = require("mongoose");

const AdditionalconsignmentidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  String80Type: {
    type: String,
    required: false
  },
  additionalConsignmentIdentificationTypeCode: {
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

module.exports = mongoose.model("Additionalconsignmentidentificationtypes", AdditionalconsignmentidentificationtypeScheema);