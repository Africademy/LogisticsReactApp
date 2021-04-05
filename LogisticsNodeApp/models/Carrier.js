const mongoose = require("mongoose");

const CarrierScheema = mongoose.Schema({
  gln: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Carriers", CarrierScheema);