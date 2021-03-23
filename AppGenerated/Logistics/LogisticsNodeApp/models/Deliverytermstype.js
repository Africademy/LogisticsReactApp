const mongoose = require("mongoose");

const DeliverytermstypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  incotermsCode: {
    type: Number,
    required: false
  },
  alternateDeliveryTermsCode: {
    type: Number,
    required: false
  },
  deliveryInstructions: {
    type: Number,
    required: false
  },
  deliveryTermsLocation: {
    type: Number,
    required: false
  },
  alternateDeliveryTermsCode: {
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
  deliveryInstructions: {
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
  deliveryTermsLocation: {
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
  incotermsCode: {
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

module.exports = mongoose.model("Deliverytermstypes", DeliverytermstypeScheema);