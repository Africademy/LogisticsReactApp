const mongoose = require("mongoose");

const FinancialroutingnumbertypecodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Financialroutingnumbertypecodes", FinancialroutingnumbertypecodeScheema);