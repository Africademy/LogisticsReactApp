const mongoose = require("mongoose");

const LogisticeventtypecodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Logisticeventtypecodes", LogisticeventtypecodeScheema);