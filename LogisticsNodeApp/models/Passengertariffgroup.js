const mongoose = require("mongoose");

const PassengertariffgroupScheema = mongoose.Schema({
  languageCode: {
    type: String,
    required: true
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

module.exports = mongoose.model("Passengertariffgroups", PassengertariffgroupScheema);