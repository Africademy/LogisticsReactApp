const mongoose = require("mongoose");

const DimensiontypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  depth: {
    type: Number,
    required: false
  },
  height: {
    type: Number,
    required: false
  },
  width: {
    type: Number,
    required: false
  },
  depth: {
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
  height: {
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
  width: {
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

module.exports = mongoose.model("Dimensiontypes", DimensiontypeScheema);