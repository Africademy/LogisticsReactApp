const mongoose = require("mongoose");

const DangerousgoodsattributetypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  dangerousGoodsAttributeTypeCode: {
    type: Number,
    required: false
  },
  dangerousGoodsAttributeText: {
    type: String,
    required: false
  },
  dangerousGoodsAttributeMeasurement: {
    type: Number,
    required: false
  },
  dangerousGoodsAttributeIndicator: {
    type: Number,
    required: false
  },
  dangerousGoodsAttributeDateTime: {
    type: Date,
    required: false
  },
  dangerousGoodsAttributeMeasurement: {
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
  dangerousGoodsAttributeTypeCode: {
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

module.exports = mongoose.model("Dangerousgoodsattributetypes", DangerousgoodsattributetypeScheema);