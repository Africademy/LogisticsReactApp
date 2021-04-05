const mongoose = require("mongoose");

const IdentifierScheema = mongoose.Schema({
  Authority: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Identifiers", IdentifierScheema);