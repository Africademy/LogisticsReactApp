const mongoose = require("mongoose");

const DatetimerangetypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  beginDate: {
    type: Date,
    required: false
  },
  beginTime: {
    type: Date,
    required: false
  },
  endDate: {
    type: Date,
    required: false
  },
  endTime: {
    type: Date,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Datetimerangetypes", DatetimerangetypeScheema);