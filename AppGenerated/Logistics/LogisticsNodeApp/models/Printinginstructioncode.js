const mongoose = require("mongoose");

const PrintinginstructioncodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Printinginstructioncodes", PrintinginstructioncodeScheema);