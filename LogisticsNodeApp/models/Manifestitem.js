const mongoose = require("mongoose");

const ManifestitemScheema = mongoose.Schema({
  MimeTypeQualifierCode: {
    type: String,
    required: true
  },
  UniformResourceIdentifier: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: false
  },
  LanguageCode: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Manifestitems", ManifestitemScheema);