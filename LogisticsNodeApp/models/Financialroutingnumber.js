const mongoose = require("mongoose");

const FinancialroutingnumberScheema = mongoose.Schema({
  financialRoutingNumber: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Financialroutingnumbers", FinancialroutingnumberScheema);