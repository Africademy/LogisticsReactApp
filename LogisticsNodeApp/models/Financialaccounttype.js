const mongoose = require("mongoose");

const FinancialaccounttypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  financialAccountNumber: {
    type: String,
    required: false
  },
  financialAccountNumberTypeCode: {
    type: Number,
    required: false
  },
  financialAccountName: {
    type: String,
    required: false
  },
  financialAccountNumberTypeCode: {
    type: [{
      Id: {
         type: String,
         required: true
         },
      Name:{
         type: String,
         required: true
         },
    }],
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Financialaccounttypes", FinancialaccounttypeScheema);