const mongoose = require("mongoose");

const LogisticservicetypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  logisticServiceRequirementCode: {
    type: Number,
    required: false
  },
  cashOnDeliveryAmount: {
    type: Number,
    required: false
  },
  insuranceValue: {
    type: Number,
    required: false
  },
  logisticServiceChargeAmount: {
    type: Number,
    required: false
  },
  cashOnDeliveryPayer: {
    type: Number,
    required: false
  },
  cashOnDeliveryBillTo: {
    type: Number,
    required: false
  },
  cashOnDeliveryAmount: {
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
  insuranceValue: {
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
  logisticServiceChargeAmount: {
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
  cashOnDeliveryPayer: {
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
  cashOnDeliveryBillTo: {
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
  logisticServiceRequirementCode: {
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

module.exports = mongoose.model("Logisticservicetypes", LogisticservicetypeScheema);