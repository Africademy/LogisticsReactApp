const mongoose = require("mongoose");

const Description1000typeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  String1000Type: {
    type: String,
    required: false
  },
  languageCode: {
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

module.exports = mongoose.model("Description1000types", Description1000typeScheema);