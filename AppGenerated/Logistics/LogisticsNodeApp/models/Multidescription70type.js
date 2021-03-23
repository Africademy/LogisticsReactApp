const mongoose = require("mongoose");

const Multidescription70typeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  description: {
    type: Number,
    required: false
  },
  description: {
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

module.exports = mongoose.model("Multidescription70types", Multidescription70typeScheema);