const mongoose = require("mongoose");

const TransportinstructionconsignmentitemtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  lineItemNumber: {
    type: Number,
    required: false
  },
  parentLineItemNumber: {
    type: Number,
    required: false
  },
  note: {
    type: Number,
    required: false
  },
  transportCargoCharacteristics: {
    type: Number,
    required: false
  },
  packageTotal: {
    type: Number,
    required: false
  },
  logisticUnit: {
    type: Number,
    required: false
  },
  referencedTransportEquipment: {
    type: Number,
    required: false
  },
  transportReference: {
    type: Number,
    required: false
  },
  handlingInstruction: {
    type: Number,
    required: false
  },
  dangerousGoodsInformation: {
    type: Number,
    required: false
  },
  avpList: {
    type: Number,
    required: false
  },
  dangerousGoodsInformation: {
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
  note: {
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
  avpList: {
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
  logisticUnit: {
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
  packageTotal: {
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
  transportCargoCharacteristics: {
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
  transportReference: {
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
  handlingInstruction: {
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

module.exports = mongoose.model("Transportinstructionconsignmentitemtypes", TransportinstructionconsignmentitemtypeScheema);