const mongoose = require("mongoose");

const AmounttypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  currencyCode: {
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

module.exports = mongoose.model("Amounttypes", AmounttypeScheema);