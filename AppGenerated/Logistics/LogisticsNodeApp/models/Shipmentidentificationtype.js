const mongoose = require("mongoose");

const ShipmentidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  gsin: {
    type: String,
    required: false
  },
  additionalShipmentIdentification: {
    type: Number,
    required: false
  },
  additionalShipmentIdentification: {
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

module.exports = mongoose.model("Shipmentidentificationtypes", ShipmentidentificationtypeScheema);