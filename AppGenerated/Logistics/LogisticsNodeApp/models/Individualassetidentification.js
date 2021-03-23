const mongoose = require("mongoose");

const IndividualassetidentificationScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  giai: {
    type: String,
    required: false
  },
  additionalIndividualAssetIdentification: {
    type: Number,
    required: false
  },
  additionalIndividualAssetIdentification: {
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

module.exports = mongoose.model("Individualassetidentifications", IndividualassetidentificationScheema);