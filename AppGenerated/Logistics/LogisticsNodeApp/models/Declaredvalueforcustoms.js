const mongoose = require("mongoose");

const DeclaredvalueforcustomsScheema = mongoose.Schema({
  currencyCode: {
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

module.exports = mongoose.model("Declaredvalueforcustomss", DeclaredvalueforcustomsScheema);