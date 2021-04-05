const mongoose = require("mongoose");

const DutyfeetaxregistrationScheema = mongoose.Schema({
  dutyFeeTaxAgencyName: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Dutyfeetaxregistrations", DutyfeetaxregistrationScheema);