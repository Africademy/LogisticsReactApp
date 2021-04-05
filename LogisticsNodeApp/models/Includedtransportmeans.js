const mongoose = require("mongoose");

const IncludedtransportmeansScheema = mongoose.Schema({
  transportMeansName: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Includedtransportmeanss", IncludedtransportmeansScheema);