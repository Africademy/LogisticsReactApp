const mongoose = require("mongoose");

const TransportinstructiontransportequipmenttypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  transportEquipmentWeight: {
    type: Number,
    required: false
  },
  transportEquipmentProviderPartyRole: {
    type: Number,
    required: false
  },
  pickUpLocation: {
    type: Number,
    required: false
  },
  returnLocation: {
    type: Number,
    required: false
  },
  transportSeal: {
    type: Number,
    required: false
  },
  dimension: {
    type: Number,
    required: false
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
  dimension: {
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
  pickUpLocation: {
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
  returnLocation: {
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
  transportEquipmentWeight: {
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
  transportSeal: {
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
  transportEquipmentProviderPartyRole: {
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

module.exports = mongoose.model("Transportinstructiontransportequipmenttypes", TransportinstructiontransportequipmenttypeScheema);