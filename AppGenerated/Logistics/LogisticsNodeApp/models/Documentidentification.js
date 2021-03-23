const mongoose = require("mongoose");

const DocumentidentificationScheema = mongoose.Schema({
  Standard: {
    type: String,
    required: true
  },
  TypeVersion: {
    type: String,
    required: true
  },
  InstanceIdentifier: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  MultipleType: {
    type: Number,
    required: false
  },
  CreationDateAndTime: {
    type: Date,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Documentidentifications", DocumentidentificationScheema);