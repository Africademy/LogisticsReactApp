const mongoose = require("mongoose");

const CommunicationchannelcodeScheema = mongoose.Schema({
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Communicationchannelcodes", CommunicationchannelcodeScheema);