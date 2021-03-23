const mongoose = require("mongoose");

const DangerousgoodsinformationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  dangerousGoodsUNIdentifier: {
    type: Number,
    required: false
  },
  dangerousGoodsShippingName: {
    type: Number,
    required: false
  },
  dangerousGoodsTechnicalName: {
    type: Number,
    required: false
  },
  dangerousGoodsDescription: {
    type: Number,
    required: false
  },
  contact: {
    type: Number,
    required: false
  },
  dangerousGoodsRegulationInformation: {
    type: Number,
    required: false
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
  dangerousGoodsRegulationInformation: {
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
  dangerousGoodsDescription: {
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
  dangerousGoodsShippingName: {
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
  dangerousGoodsTechnicalName: {
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
  dangerousGoodsUNIdentifier: {
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

module.exports = mongoose.model("Dangerousgoodsinformationtypes", DangerousgoodsinformationtypeScheema);