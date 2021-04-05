const mongoose = require("mongoose");

const ReturnablepackagingtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  packagingQuantity: {
    type: Number,
    required: false
  },
  currentHolderRegistration: {
    type: Number,
    required: false
  },
  newHolderRegistration: {
    type: Number,
    required: false
  },
  packagingConditionCode: {
    type: Number,
    required: false
  },
  returnableAssetIdentification: {
    type: Number,
    required: false
  },
  individualReturnableAssetIdentification: {
    type: Number,
    required: false
  },
  currentHolderRegistration: {
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
  newHolderRegistration: {
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
  returnableAssetIdentification: {
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
  individualReturnableAssetIdentification: {
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
  packagingConditionCode: {
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

module.exports = mongoose.model("Returnablepackagingtypes", ReturnablepackagingtypeScheema);