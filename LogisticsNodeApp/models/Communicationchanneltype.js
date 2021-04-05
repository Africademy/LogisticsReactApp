const mongoose = require("mongoose");

const CommunicationchanneltypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  communicationChannelCode: {
    type: Number,
    required: false
  },
  communicationValue: {
    type: String,
    required: false
  },
  communicationChannelName: {
    type: String,
    required: false
  },
  communicationChannelCode: {
    type: [{
      Id: {
         type: String,
         required: true
         },
      Name:{
         type: String,
         required: true
         },
    }],
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Communicationchanneltypes", CommunicationchanneltypeScheema);