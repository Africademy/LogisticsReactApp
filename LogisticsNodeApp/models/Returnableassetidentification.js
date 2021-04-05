const mongoose = require("mongoose");

const ReturnableassetidentificationScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  grai: {
    type: String,
    required: true
  },
  additionalReturnableAssetIdentification: {
    type: Number,
    required: false
  },
  additionalReturnableAssetIdentification: {
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

module.exports = mongoose.model("Returnableassetidentifications", ReturnableassetidentificationScheema);