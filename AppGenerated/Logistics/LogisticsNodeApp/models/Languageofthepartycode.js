const mongoose = require("mongoose");

const LanguageofthepartycodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Languageofthepartycodes", LanguageofthepartycodeScheema);