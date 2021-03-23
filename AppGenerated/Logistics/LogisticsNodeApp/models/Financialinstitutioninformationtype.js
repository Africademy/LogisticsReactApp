const mongoose = require("mongoose");

const FinancialinstitutioninformationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  financialInstitutionName: {
    type: String,
    required: false
  },
  financialInstitutionBranchName: {
    type: String,
    required: false
  },
  financialAccount: {
    type: Number,
    required: false
  },
  financialRoutingNumber: {
    type: Number,
    required: false
  },
  additionalFinancialInformation: {
    type: Number,
    required: false
  },
  address: {
    type: Number,
    required: false
  },
  financialAccount: {
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
  financialRoutingNumber: {
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
  additionalFinancialInformation: {
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
  address: {
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

module.exports = mongoose.model("Financialinstitutioninformationtypes", FinancialinstitutioninformationtypeScheema);