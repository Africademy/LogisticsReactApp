const mongoose = require("mongoose");

const AdditionalpartyidentificationScheema = mongoose.Schema({
  additionalPartyIdentificationTypeCode: {
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

module.exports = mongoose.model("Additionalpartyidentifications", AdditionalpartyidentificationScheema);