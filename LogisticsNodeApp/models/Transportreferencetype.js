const mongoose = require("mongoose");

const TransportreferencetypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  creationDateTime: {
    type: Date,
    required: false
  },
  revisionNumber: {
    type: Number,
    required: false
  },
  lineItemNumber: {
    type: Number,
    required: false
  },
  transportReferenceTypeCode: {
    type: Number,
    required: false
  },
  transportReferenceTypeCode: {
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

module.exports = mongoose.model("Transportreferencetypes", TransportreferencetypeScheema);