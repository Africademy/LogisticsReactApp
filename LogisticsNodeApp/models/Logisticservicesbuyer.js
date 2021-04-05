const mongoose = require("mongoose");

const LogisticservicesbuyerScheema = mongoose.Schema({
  gln: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Logisticservicesbuyers", LogisticservicesbuyerScheema);