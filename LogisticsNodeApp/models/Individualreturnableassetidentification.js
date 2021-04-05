const mongoose = require("mongoose");

const IndividualreturnableassetidentificationScheema = mongoose.Schema({
  grai: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Individualreturnableassetidentifications", IndividualreturnableassetidentificationScheema);