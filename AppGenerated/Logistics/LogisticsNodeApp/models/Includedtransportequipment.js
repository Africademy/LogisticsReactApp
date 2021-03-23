const mongoose = require("mongoose");

const IncludedtransportequipmentScheema = mongoose.Schema({
  numberOfPiecesOfEquipment: {
    type: Number,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Includedtransportequipments", IncludedtransportequipmentScheema);