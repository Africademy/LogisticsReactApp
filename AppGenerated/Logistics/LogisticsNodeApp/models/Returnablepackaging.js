const mongoose = require("mongoose");

const ReturnablepackagingScheema = mongoose.Schema({
  packagingQuantity: {
    type: Number,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Returnablepackagings", ReturnablepackagingScheema);