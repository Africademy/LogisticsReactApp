const mongoose = require("mongoose");

const ScopeScheema = mongoose.Schema({
  Type: {
    type: String,
    required: true
  },
  InstanceIdentifier: {
    type: String,
    required: true
  },
  Identifier: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Scopes", ScopeScheema);