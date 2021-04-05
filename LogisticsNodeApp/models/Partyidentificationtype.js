const mongoose = require("mongoose");

const PartyidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  gln: {
    type: String,
    required: false
  },
  additionalPartyIdentification: {
    type: Number,
    required: false
  },
  additionalPartyIdentification: {
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

module.exports = mongoose.model("Partyidentificationtypes", PartyidentificationtypeScheema);