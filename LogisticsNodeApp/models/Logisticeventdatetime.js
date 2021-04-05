const mongoose = require("mongoose");

const LogisticeventdatetimeScheema = mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Logisticeventdatetimes", LogisticeventdatetimeScheema);