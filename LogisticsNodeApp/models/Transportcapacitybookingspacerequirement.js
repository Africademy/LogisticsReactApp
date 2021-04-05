const mongoose = require("mongoose");

const TransportcapacitybookingspacerequirementScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  transportCargoCharacteristics: {
    type: Number,
    required: true
  },
  packageTotal: {
    type: Number,
    required: false
  },
  includedTransportMeans: {
    type: Number,
    required: false
  },
  passengerInformation: {
    type: Number,
    required: false
  },
  includedTransportEquipment: {
    type: Number,
    required: false
  },
  numberOfPiecesOfEquipment: {
    type: Number,
    required: false
  },
  transportEquipmentWeight: {
    type: Number,
    required: false
  },
  dimension: {
    type: Number,
    required: false
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
  includedTransportEquipment: {
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
  passengerInformation: {
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
  includedTransportMeans: {
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

module.exports = mongoose.model("Transportcapacitybookingspacerequirements", TransportcapacitybookingspacerequirementScheema);