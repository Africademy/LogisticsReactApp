const mongoose = require("mongoose");

const PackagetotaltypeScheema = mongoose.Schema({

  totalPackageQuantity: {
    type: Number,
    required: false
  },
  totalGrossVolume: {
      Value: {
         type: String,
         required: true
         },
      Measurementtype:{
         type: String,
         required: true
         }
    },
  totalGrossWeight: {
      Value: {
         type: String,
         required: true
         },
      Measurementtype:{
         type: String,
         required: true
         },
  },
  packageTypeCode: {
      Id: {
         type: String,
         required: false
         },
      Name:{
         type: String,
         required: false
         },
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Packagetotaltypes", PackagetotaltypeScheema);