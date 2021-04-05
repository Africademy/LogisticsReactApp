const mongoose = require("mongoose");

const Description70typeScheema = mongoose.Schema({
  id: {
    type: Number,
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

module.exports = mongoose.model("Description70types", Description70typeScheema);