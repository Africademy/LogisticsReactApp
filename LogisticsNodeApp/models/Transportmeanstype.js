const mongoose = require("mongoose");

const TransportmeanstypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  transportMeansType: {
    type: Number,
    required: false
  },
  transportMeansID: {
    type: String,
    required: false
  },
  transportMeansName: {
    type: String,
    required: false
  },
  transportMeansType: {
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

module.exports = mongoose.model("Transportmeanstypes", TransportmeanstypeScheema);