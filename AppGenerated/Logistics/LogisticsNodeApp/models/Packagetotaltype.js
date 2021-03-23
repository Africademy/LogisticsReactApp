const mongoose = require("mongoose");

const PackagetotaltypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  packageTypeCode: {
    type: Number,
    required: false
  },
  totalPackageQuantity: {
    type: Number,
    required: false
  },
  totalGrossVolume: {
    type: Number,
    required: false
  },
  totalGrossWeight: {
    type: Number,
    required: false
  },
  returnablePackaging: {
    type: Number,
    required: false
  },
  totalGrossVolume: {
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
  totalGrossWeight: {
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

module.exports = mongoose.model("Packagetotaltypes", PackagetotaltypeScheema);