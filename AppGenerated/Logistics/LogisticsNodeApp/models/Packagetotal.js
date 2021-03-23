const mongoose = require("mongoose");

const PackagetotalScheema = mongoose.Schema({
  totalPackageQuantity: {
    type: Number,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Packagetotals", PackagetotalScheema);