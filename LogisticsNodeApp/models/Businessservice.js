const mongoose = require("mongoose");

const BusinessserviceScheema = mongoose.Schema({
  BusinessServiceName: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Businessservices", BusinessserviceScheema);