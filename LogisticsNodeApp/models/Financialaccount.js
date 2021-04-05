const mongoose = require("mongoose");

const FinancialaccountScheema = mongoose.Schema({
  financialAccountNumber: {
    type: String,
    required: true
  },
  financialAccountName: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Financialaccounts", FinancialaccountScheema);