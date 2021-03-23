const mongoose = require("mongoose");

const DateoptionaltimetypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: false
  },
  time: {
    type: Date,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Dateoptionaltimetypes", DateoptionaltimetypeScheema);