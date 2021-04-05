const mongoose = require("mongoose");

const FinancialaccountnumbertypecodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Financialaccountnumbertypecodes", FinancialaccountnumbertypecodeScheema);