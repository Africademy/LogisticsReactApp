const mongoose = require("mongoose");

const IncotermscodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Incotermscodes", IncotermscodeScheema);