const mongoose = require("mongoose");

const ContacttypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  contactTypeCode: {
    type: Number,
    required: false
  },
  personName: {
    type: String,
    required: false
  },
  departmentName: {
    type: String,
    required: false
  },
  jobTitle: {
    type: String,
    required: false
  },
  responsibility: {
    type: Number,
    required: false
  },
  communicationChannel: {
    type: Number,
    required: false
  },
  afterHoursCommunicationChannel: {
    type: Number,
    required: false
  },
  communicationChannel: {
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
  afterHoursCommunicationChannel: {
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
  responsibility: {
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
  contactTypeCode: {
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

module.exports = mongoose.model("Contacttypes", ContacttypeScheema);