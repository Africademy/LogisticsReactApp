const mongoose = require("mongoose");

const AdditionalindividualassetidentificationScheema = mongoose.Schema({
  additionalIndividualAssetIdentificationTypeCode: {
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

module.exports = mongoose.model("Additionalindividualassetidentifications", AdditionalindividualassetidentificationScheema);