const mongoose = require("mongoose");

const LogisticeventtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  logisticEventTypeCode: {
    type: Number,
    required: false
  },
  logisticEventDuration: {
    type: Number,
    required: false
  },
  logisticLocation: {
    type: Number,
    required: false
  },
  logisticEventPeriod: {
    type: Number,
    required: false
  },
  logisticEventDateTime: {
    type: Number,
    required: false
  },
  logisticEventDateTime: {
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
  logisticEventPeriod: {
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
  logisticEventDuration: {
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
  logisticEventTypeCode: {
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
  logisticLocation: {
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

module.exports = mongoose.model("Logisticeventtypes", LogisticeventtypeScheema);