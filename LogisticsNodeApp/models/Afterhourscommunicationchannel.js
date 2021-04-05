const mongoose = require("mongoose");

const AfterhourscommunicationchannelScheema = mongoose.Schema({
  communicationValue: {
    type: String,
    required: true
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

module.exports = mongoose.model("Afterhourscommunicationchannels", AfterhourscommunicationchannelScheema);