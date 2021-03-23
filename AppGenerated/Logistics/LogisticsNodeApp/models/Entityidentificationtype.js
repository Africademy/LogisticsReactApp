const mongoose = require("mongoose");

const EntityidentificationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  entityIdentification: {
    type: String,
    required: false
  },
  contentOwner: {
    type: Number,
    required: false
  },
  contentOwner: {
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

module.exports = mongoose.model("Entityidentificationtypes", EntityidentificationtypeScheema);