const mongoose = require("mongoose");

const StandardbusinessdocumentheaderScheema = mongoose.Schema({
  HeaderVersion: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Standardbusinessdocumentheaders", StandardbusinessdocumentheaderScheema);