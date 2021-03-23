const mongoose = require("mongoose");

const PersonScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  personName: {
    type: String,
    required: false
  },
  dateOfBirth: {
    type: Date,
    required: false
  },
  gender: {
    type: Number,
    required: false
  },
  nationality: {
    type: Number,
    required: false
  },
  identityDocument: {
    type: Number,
    required: false
  },
  identityDocument: {
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
  gender: {
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
  nationality: {
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

module.exports = mongoose.model("Persons", PersonScheema);