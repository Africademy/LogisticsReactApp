const mongoose = require("mongoose");

const LogisticservicessellerScheema = mongoose.Schema({
  gln: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Logisticservicessellers", LogisticservicessellerScheema);