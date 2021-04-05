const mongoose = require("mongoose");

const DutyfeetaxregistrationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  dutyFeeTaxRegistrationID: {
    type: Number,
    required: false
  },
  dutyFeeTaxTypeCode: {
    type: Number,
    required: false
  },
  dutyFeeTaxAgencyName: {
    type: String,
    required: false
  },
  dutyFeeTaxDescription: {
    type: Number,
    required: false
  },
  dutyFeeTaxDescription: {
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
  dutyFeeTaxRegistrationID: {
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
  dutyFeeTaxTypeCode: {
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

module.exports = mongoose.model("Dutyfeetaxregistrationtypes", DutyfeetaxregistrationtypeScheema);