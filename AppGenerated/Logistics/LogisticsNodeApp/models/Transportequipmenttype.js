const mongoose = require("mongoose");

const TransportequipmenttypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  transportEquipmentTypeCode: {
    type: Number,
    required: false
  },
  returnableAssetTypeIdentification: {
    type: Number,
    required: false
  },
  individualReturnableAssetIdentification: {
    type: Number,
    required: false
  },
  individualAssetIdentification: {
    type: Number,
    required: false
  },
  transportEquipmentTypeCode: {
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
  individualAssetIdentification: {
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
  returnableAssetTypeIdentification: {
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
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportequipmenttypes", TransportequipmenttypeScheema);