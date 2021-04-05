const mongoose = require("mongoose");

const DeliverytermslocationScheema = mongoose.Schema({
  gln: {
    type: String,
    required: false
  },
  sublocationIdentification: {
    type: String,
    required: false
  },
  locationName: {
    type: String,
    required: false
  },
  utcOffset: {
    type: Number,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Deliverytermslocations", DeliverytermslocationScheema);