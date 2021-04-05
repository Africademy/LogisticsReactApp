const mongoose = require("mongoose");

const TransportinstructiontermstypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  transportServiceCategoryType: {
    type: Number,
    required: false
  },
  transportCollectChargeAmount: {
    type: Number,
    required: false
  },
  transportPaymentMethodTypeCode: {
    type: Number,
    required: false
  },
  transportPickUpChargeAmount: {
    type: Number,
    required: false
  },
  transportServiceConditionType: {
    type: Number,
    required: false
  },
  transportServiceLevelCode: {
    type: Number,
    required: false
  },
  routeID: {
    type: Number,
    required: false
  },
  logisticService: {
    type: Number,
    required: false
  },
  transportCollectChargeAmount: {
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
  transportPickUpChargeAmount: {
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
  routeID: {
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
  logisticService: {
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
  transportServiceCategoryType: {
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
  transportPaymentMethodTypeCode: {
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
  transportServiceConditionType: {
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
  transportServiceLevelCode: {
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

module.exports = mongoose.model("Transportinstructiontermstypes", TransportinstructiontermstypeScheema);