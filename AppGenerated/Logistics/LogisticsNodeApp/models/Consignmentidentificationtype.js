const mongoose = require("mongoose");

const ConsignmentidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  ginc: {
    type: String,
    required: false
  },
  additionalConsignmentIdentification: {
    type: Number,
    required: false
  },
  additionalConsignmentIdentification: {
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

module.exports = mongoose.model("Consignmentidentificationtypes", ConsignmentidentificationtypeScheema);