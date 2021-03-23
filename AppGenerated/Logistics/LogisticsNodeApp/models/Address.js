const mongoose = require("mongoose");

const AddressScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: false
  },
  cityCode: {
    type: String,
    required: false
  },
  countyCode: {
    type: String,
    required: false
  },
  crossStreet: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  pOBoxNumber: {
    type: String,
    required: false
  },
  postalCode: {
    type: String,
    required: false
  },
  provinceCode: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  streetAddressOne: {
    type: String,
    required: false
  },
  streetAddressTwo: {
    type: String,
    required: false
  },
  streetAddressThree: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Addresss", AddressScheema);