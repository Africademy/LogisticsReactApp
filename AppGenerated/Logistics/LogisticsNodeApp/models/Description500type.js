const mongoose = require("mongoose");

const Description500typeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  String500Type: {
    type: String,
    required: true
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

module.exports = mongoose.model("Description500types", Description500typeScheema);