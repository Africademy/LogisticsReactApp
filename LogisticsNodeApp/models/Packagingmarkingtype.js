const mongoose = require("mongoose");

const PackagingmarkingtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  markingTypeCode: {
    type: Number,
    required: false
  },
  markingContentDateTime: {
    type: Date,
    required: false
  },
  markingContentText: {
    type: String,
    required: false
  },
  markingTypeCode: {
    type: [{
      Id: {
         type: String,
         required: true
         },
      Name:{
         type: String,
         required: true
         },
    }],
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Packagingmarkingtypes", PackagingmarkingtypeScheema);