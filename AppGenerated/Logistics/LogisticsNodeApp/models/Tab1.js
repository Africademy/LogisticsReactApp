const mongoose = require("mongoose");

const Tab1Scheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  intcol: {
    type: Number,
    required: false
  },
  VarCharCol: {
    type: String,
    required: false
  },
  DateTime: {
    type: Date,
    required: false
  },
  FloatCol: {
    type: Number,
    required: false
  },
  TimeCol: {
    type: Date,
    required: false
  },
  DecimalCol: {
    type: Number,
    required: false
  },
  MediumTextCol: {
    type: String,
    required: false
  },
  fk1: {
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
  fk2: {
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

module.exports = mongoose.model("Tab1s", Tab1Scheema);