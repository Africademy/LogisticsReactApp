const mongoose = require("mongoose");

const EnumerationlibraryScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  semanticResourceURN: {
    type: String,
    required: false
  },
  CodeValue: {
    type: String,
    required: false
  },
  resourceSubTypeCode: {
    type: String,
    required: false
  },
  CodeList: {
    type: String,
    required: false
  },
  Domain: {
    type: String,
    required: false
  },
  ExternalLink: {
    type: String,
    required: false
  },
  codeName: {
    type: String,
    required: false
  },
  Definition: {
    type: String,
    required: false
  },
  changeLog: {
    type: String,
    required: false
  },
  Status: {
    type: String,
    required: false
  },
  Version: {
    type: String,
    required: false
  },
  ChangeDate: {
    type: String,
    required: false
  },
  changeLogComment: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Enumerationlibrarys", EnumerationlibraryScheema);