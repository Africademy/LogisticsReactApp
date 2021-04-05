const mongoose = require("mongoose");

const TransportcapacitybookingtransportmovementtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  transportModeCode: {
    type: Number,
    required: false
  },
  routeID: {
    type: Number,
    required: false
  },
  plannedDeparture: {
    type: Number,
    required: false
  },
  plannedArrival: {
    type: Number,
    required: false
  },
  plannedWaypoint: {
    type: Number,
    required: false
  },
  carrier: {
    type: Number,
    required: false
  },
  routeID: {
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
  plannedDeparture: {
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
  plannedArrival: {
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
  plannedWaypoint: {
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
  carrier: {
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
  transportModeCode: {
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

module.exports = mongoose.model("Transportcapacitybookingtransportmovementtypes", TransportcapacitybookingtransportmovementtypeScheema);