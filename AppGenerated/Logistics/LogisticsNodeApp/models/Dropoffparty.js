const mongoose = require("mongoose");

const DropoffpartyScheema = mongoose.Schema({
  gln: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Dropoffpartys", DropoffpartyScheema);