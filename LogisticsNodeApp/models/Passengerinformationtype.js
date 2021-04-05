const mongoose = require("mongoose");

const PassengerinformationtypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  numberOfPassengers: {
    type: Number,
    required: false
  },
  passengerCategoryCode: {
    type: Number,
    required: false
  },
  passengerTariffGroup: {
    type: String,
    required: false
  },
  person: {
    type: Number,
    required: false
  },
  passengerCategoryCode: {
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

module.exports = mongoose.model("Passengerinformationtypes", PassengerinformationtypeScheema);