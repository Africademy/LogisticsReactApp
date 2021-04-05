const mongoose = require("mongoose");

const OrganisationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  organisationName: {
    type: String,
    required: false
  },
  issuedCapital: {
    type: Number,
    required: false
  },
  issuedCapital: {
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

module.exports = mongoose.model("Organisationtypes", OrganisationtypeScheema);