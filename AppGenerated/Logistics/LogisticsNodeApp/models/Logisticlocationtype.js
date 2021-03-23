const mongoose = require("mongoose");

const LogisticlocationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  unLocationCode: {
    type: Number,
    required: false
  },
  gln: {
    type: String,
    required: false
  },
  additionalLocationIdentification: {
    type: Number,
    required: false
  },
  sublocationIdentification: {
    type: String,
    required: false
  },
  locationName: {
    type: String,
    required: false
  },
  locationSpecificInstructions: {
    type: Number,
    required: false
  },
  utcOffset: {
    type: Number,
    required: false
  },
  address: {
    type: Number,
    required: false
  },
  contact: {
    type: Number,
    required: false
  },
  regularOperatingHours: {
    type: Number,
    required: false
  },
  specialOperatingHours: {
    type: Number,
    required: false
  },
  locationSpecificInstructions: {
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
  additionalLocationIdentification: {
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
  regularOperatingHours: {
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
  specialOperatingHours: {
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
  address: {
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
  unLocationCode: {
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

module.exports = mongoose.model("Logisticlocationtypes", LogisticlocationtypeScheema);