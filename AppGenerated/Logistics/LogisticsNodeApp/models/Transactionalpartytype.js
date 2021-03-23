const mongoose = require("mongoose");

const TransactionalpartytypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  gln: {
    type: String,
    required: false
  },
  additionalPartyIdentification: {
    type: Number,
    required: false
  },
  address: {
    type: Number,
    required: false
  },
  contact: {
    type: Number,
    required: false
  },
  dutyFeeTaxRegistration: {
    type: Number,
    required: false
  },
  organisationDetails: {
    type: Number,
    required: false
  },
  financialInstitutionInformation: {
    type: Number,
    required: false
  },
  additionalPartyIdentification: {
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
  dutyFeeTaxRegistration: {
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
  financialInstitutionInformation: {
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
  organisationDetails: {
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
  contact: {
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

module.exports = mongoose.model("Transactionalpartytypes", TransactionalpartytypeScheema);