const mongoose = require("mongoose");

const ServicetransactionScheema = mongoose.Schema({
  TypeOfServiceTransaction: {
    type: String,
    required: false
  },
  IsNonRepudiationRequired: {
    type: String,
    required: false
  },
  IsAuthenticationRequired: {
    type: String,
    required: false
  },
  IsNonRepudiationOfReceiptRequired: {
    type: String,
    required: false
  },
  IsIntegrityCheckRequired: {
    type: String,
    required: false
  },
  IsApplicationErrorResponseRequested: {
    type: String,
    required: false
  },
  TimeToAcknowledgeReceipt: {
    type: String,
    required: false
  },
  TimeToAcknowledgeAcceptance: {
    type: String,
    required: false
  },
  TimeToPerform: {
    type: String,
    required: false
  },
  Recurrence: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Servicetransactions", ServicetransactionScheema);