const mongoose = require("mongoose");

const AdditionalpartyidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  additionalPartyIdentificationTypeCode: {
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

module.exports = mongoose.model("Additionalpartyidentificationtypes", AdditionalpartyidentificationtypeScheema);