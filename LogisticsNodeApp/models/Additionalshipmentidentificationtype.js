const mongoose = require("mongoose");

const AdditionalshipmentidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  String80Type: {
    type: String,
    required: false
  },
  additionalShipmentIdentificationTypeCode: {
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

module.exports = mongoose.model("Additionalshipmentidentificationtypes", AdditionalshipmentidentificationtypeScheema);