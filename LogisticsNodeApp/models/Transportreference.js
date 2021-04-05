const mongoose = require("mongoose");

const TransportreferenceScheema = mongoose.Schema({
  entityIdentification: {
    type: String,
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
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportreferences", TransportreferenceScheema);