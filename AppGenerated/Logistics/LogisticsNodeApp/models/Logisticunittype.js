const mongoose = require("mongoose");

const LogisticunittypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  parentLogisticUnitId: {
    type: Number,
    required: false
  },
  grossWeight: {
    type: Number,
    required: false
  },
  packageLevelCode: {
    type: Number,
    required: false
  },
  packageTypeCode: {
    type: Number,
    required: false
  },
  tradeItemQuantity: {
    type: Number,
    required: false
  },
  packagingMarking: {
    type: Number,
    required: false
  },
  referencedTransportEquipment: {
    type: Number,
    required: false
  },
  returnablePackaging: {
    type: Number,
    required: false
  },
  dimension: {
    type: Number,
    required: false
  },
  unitMeasurement: {
    type: Number,
    required: false
  },
  sscc: {
    type: String,
    required: false
  },
  additionalLogisticUnitIdentification: {
    type: Number,
    required: false
  },
  additionalLogisticUnitIdentification: {
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
  parentLogisticUnitId: {
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
  grossWeight: {
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
  packagingMarking: {
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
  tradeItemQuantity: {
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
  returnablePackaging: {
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
  referencedTransportEquipment: {
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
  unitMeasurement: {
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
  packageLevelCode: {
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
  packageTypeCode: {
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

module.exports = mongoose.model("Logisticunittypes", LogisticunittypeScheema);