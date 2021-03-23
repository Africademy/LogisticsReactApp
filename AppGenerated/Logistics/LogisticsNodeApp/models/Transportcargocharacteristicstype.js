const mongoose = require("mongoose");

const TransportcargocharacteristicstypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  cargoTypeCode: {
    type: String,
    required: false
  },
  harmonizedSystemCode: {
    type: String,
    required: false
  },
  cargoTypeDescription: {
    type: String,
    required: false
  },
  countryOfOriginCode: {
    type: String,
    required: false
  },
  finalDestinationCountry: {
    type: String,
    required: false
  },
  totalGrossVolume: {
    type: Number,
    required: false
  },
  totalGrossWeight: {
    type: Number,
    required: false
  },
  totalTransportNetWeight: {
    type: Number,
    required: false
  },
  totalChargeableWeight: {
    type: Number,
    required: false
  },
  declaredWeightForCustoms: {
    type: Number,
    required: false
  },
  totalLoadingLength: {
    type: Number,
    required: false
  },
  associatedInvoiceAmount: {
    type: Number,
    required: false
  },
  declaredValueForCustoms: {
    type: Number,
    required: false
  },
  totalPackageQuantity: {
    type: Number,
    required: false
  },
  totalItemQuantity: {
    type: Number,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportcargocharacteristicstypes", TransportcargocharacteristicstypeScheema);