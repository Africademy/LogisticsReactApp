const mongoose = require("mongoose");

const HandlinginstructiontypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  handlingInstructionCode: {
    type: Number,
    required: false
  },
  handlingInstructionText: {
    type: Number,
    required: false
  },
  printingInstructionCode: {
    type: Number,
    required: false
  },
  storageTemperature: {
    type: Number,
    required: false
  },
  transportTemperature: {
    type: Number,
    required: false
  },
  handlingInstructionText: {
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
  storageTemperature: {
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
  transportTemperature: {
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
  handlingInstructionCode: {
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
  printingInstructionCode: {
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

module.exports = mongoose.model("Handlinginstructiontypes", HandlinginstructiontypeScheema);