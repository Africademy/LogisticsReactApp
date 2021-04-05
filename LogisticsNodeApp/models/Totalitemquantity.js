const mongoose = require("mongoose");

const TotalitemquantityScheema = mongoose.Schema({
  measurementUnitCode: {
    type: String,
    required: false
  },
  codeListVersion: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Totalitemquantitys", TotalitemquantityScheema);