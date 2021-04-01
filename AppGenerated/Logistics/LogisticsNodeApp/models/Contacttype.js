const mongoose = require("mongoose");

const ContacttypeScheema = mongoose.Schema({

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
  communicationValue: {
    type: String,
    required: false
  },
  communicationChannelName: {
    type: String,
    required: false
  },
  communicationChannelCode: {
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