const mongoose = require("mongoose");

const CargotypedescriptionScheema = mongoose.Schema({
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

module.exports = mongoose.model("Cargotypedescriptions", CargotypedescriptionScheema);