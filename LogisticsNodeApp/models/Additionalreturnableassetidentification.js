const mongoose = require("mongoose");

const AdditionalreturnableassetidentificationScheema = mongoose.Schema({
  additionalReturnableAssetIdentificationTypeCode: {
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

module.exports = mongoose.model("Additionalreturnableassetidentifications", AdditionalreturnableassetidentificationScheema);