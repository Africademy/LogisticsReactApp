const mongoose = require("mongoose");

const LogisticunitidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  sscc: {
    type: String,
    required: false
  },
  additionalLogisticUnitIdentification: {
    type: Number,
    required: false
  },
  additionalLogisticUnitIdentification: {
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

module.exports = mongoose.model("Logisticunitidentificationtypes", LogisticunitidentificationtypeScheema);