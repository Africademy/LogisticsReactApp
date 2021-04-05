const mongoose = require("mongoose");

const DutyfeetaxdescriptionScheema = mongoose.Schema({
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

module.exports = mongoose.model("Dutyfeetaxdescriptions", DutyfeetaxdescriptionScheema);