const mongoose = require("mongoose");

const FinancialroutingnumbertypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  financialRoutingNumber: {
    type: String,
    required: false
  },
  financialRoutingNumberTypeCode: {
    type: Number,
    required: false
  },
  financialRoutingNumberTypeCode: {
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

module.exports = mongoose.model("Financialroutingnumbertypes", FinancialroutingnumbertypeScheema);