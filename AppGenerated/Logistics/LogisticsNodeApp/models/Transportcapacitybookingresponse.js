const mongoose = require("mongoose");

const TransportcapacitybookingresponseScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  creationDateTime: {
    type: Date,
    required: true
  },
  documentStatusCode: {
    type: Number,
    required: true
  },
  documentActionCode: {
    type: Number,
    required: false
  },
  documentStructureVersion: {
    type: String,
    required: false
  },
  lastUpdateDateTime: {
    type: Date,
    required: false
  },
  revisionNumber: {
    type: Number,
    required: false
  },
  extension: {
    type: String,
    required: false
  },
  documentEffectiveDate: {
    type: Date,
    required: false
  },
  avpList: {
    type: String,
    required: false
  },
  transportCapacityBookingResponseIdentification: {
    type: Number,
    required: false
  },
  transportCapacityBookingStatusCode: {
    type: Number,
    required: false
  },
  logisticServicesBuyer: {
    type: Number,
    required: true
  },
  logisticServicesSeller: {
    type: Number,
    required: true
  },
  transportCapacityBooking: {
    type: Number,
    required: false
  },
  transportCapacityBookingResponseIdentification: {
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
  avpList: {
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
  documentStatusCode: {
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
  documentActionCode: {
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
  transportCapacityBookingStatusCode: {
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
  logisticServicesBuyer: {
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
  logisticServicesSeller: {
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
  transportCapacityBooking: {
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

module.exports = mongoose.model("Transportcapacitybookingresponses", TransportcapacitybookingresponseScheema);