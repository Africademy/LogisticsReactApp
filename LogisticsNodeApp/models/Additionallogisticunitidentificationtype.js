const mongoose = require("mongoose");

const AdditionallogisticunitidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  String80Type: {
    type: String,
    required: false
  },
  additionalLogisticUnitIdentificationTypeCode: {
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

module.exports = mongoose.model("Additionallogisticunitidentificationtypes", AdditionallogisticunitidentificationtypeScheema);