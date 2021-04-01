const mongoose = require("mongoose");

const LogisticeventperiodScheema = mongoose.Schema({
  beginDate: {
    type: Date,
    required: false
  },
  beginTime: {
    type: String,
    required: false
  },
  endDate: {
    type: Date,
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