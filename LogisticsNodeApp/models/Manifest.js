const mongoose = require("mongoose");

const ManifestScheema = mongoose.Schema({
  NumberOfItems: {
    type: Number,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Manifests", ManifestScheema);