const mongoose = require("mongoose");

const LogisticeventtypeScheema = mongoose.Schema({
  associatedInvoiceAmount: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
      AmountType: {
        type: String,
        required: true
      }
    }],
    required: true
  },
  logisticEventDateTime: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  logisticEventPeriod: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  logisticEventDuration: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  logisticEventTypeCode: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  logisticLocation: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Logisticeventtypes", LogisticeventtypeScheema);