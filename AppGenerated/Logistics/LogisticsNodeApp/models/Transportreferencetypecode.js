const mongoose = require("mongoose");

const TransportreferencetypecodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportreferencetypecodes", TransportreferencetypecodeScheema);