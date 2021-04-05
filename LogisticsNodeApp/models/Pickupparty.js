const mongoose = require("mongoose");

const PickuppartyScheema = mongoose.Schema({
  gln: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Pickuppartys", PickuppartyScheema);