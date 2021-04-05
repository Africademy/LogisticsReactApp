const mongoose = require("mongoose");

const DocumentreferencetypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  creationDateTime: {
    type: Date,
    required: false
  },
  revisionNumber: {
    type: Number,
    required: false
  },
  lineItemNumber: {
    type: Number,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Documentreferencetypes", DocumentreferencetypeScheema);