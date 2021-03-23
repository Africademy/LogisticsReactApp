const mongoose = require("mongoose");

const LogisticeventperiodScheema = mongoose.Schema({
  beginDate: {
    type: String,
    required: false
  },
  beginTime: {
    type: String,
    required: false
  },
  endDate: {
    type: String,
    required: false
  },
  endTime: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Logisticeventperiods", LogisticeventperiodScheema);