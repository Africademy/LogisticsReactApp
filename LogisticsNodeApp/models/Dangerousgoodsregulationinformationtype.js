const mongoose = require("mongoose");

const DangerousgoodsregulationinformationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  dangerousGoodsRegulationCode: {
    type: Number,
    required: false
  },
  dangerousGoodsRegulationName: {
    type: String,
    required: false
  },
  dangerousGoodsHazardClass: {
    type: String,
    required: false
  },
  dangerousGoodsPackingGroup: {
    type: String,
    required: false
  },
  dangerousGoodsAttribute: {
    type: Number,
    required: false
  },
  dangerousGoodsAttribute: {
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
  dangerousGoodsRegulationCode: {
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

module.exports = mongoose.model("Dangerousgoodsregulationinformationtypes", DangerousgoodsregulationinformationtypeScheema);