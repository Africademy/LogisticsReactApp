const mongoose = require("mongoose");

const ReturnableassettypeidentificationScheema = mongoose.Schema({
  grai: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Returnableassettypeidentifications", ReturnableassettypeidentificationScheema);