const mongoose = require("mongoose");

const CommunicationchannelScheema = mongoose.Schema({
  communicationValue: {
    type: String,
    required: false
  },
  communicationChannelName: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Communicationchannels", CommunicationchannelScheema);