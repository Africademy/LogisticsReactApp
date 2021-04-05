const mongoose = require("mongoose");

const EcomstringattributevaluepairlistScheema = mongoose.Schema({
  attributeName: {
    type: String,
    required: true
  },
  qualifierCodeName: {
    type: String,
    required: true
  },
  qualifierCodeList: {
    type: String,
    required: false
  },
  qualifierCodeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Ecomstringattributevaluepairlists", EcomstringattributevaluepairlistScheema);