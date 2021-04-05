const mongoose = require("mongoose");

const TransportsealtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  sealIdentification: {
    type: Number,
    required: false
  },
  sealTypeCode: {
    type: Number,
    required: false
  },
  sealAffixingPartyRole: {
    type: Number,
    required: false
  },
  sealConditionCode: {
    type: Number,
    required: false
  },
  sealIdentification: {
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
  sealTypeCode: {
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
  sealAffixingPartyRole: {
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
  sealConditionCode: {
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

module.exports = mongoose.model("Transportsealtypes", TransportsealtypeScheema);