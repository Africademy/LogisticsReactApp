const mongoose = require("mongoose");

const QuantitytypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  measurementUnitCode: {
    type: String,
    required: false
  },
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Quantitytypes", QuantitytypeScheema);