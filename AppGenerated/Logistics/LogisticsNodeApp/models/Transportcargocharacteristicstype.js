const mongoose = require("mongoose");

const TransportcargocharacteristicstypeScheema = mongoose.Schema({
  
  cargoTypeCode: {
      Id: {
        type: Number,
        required: true
      },
      Name:{
        type: String,
        required: true
      }
  },
  harmonizedSystemCode: {
      Id: {
        type: Number,
        required: true
      },
      Name:{
        type: String,
        required: true
      }
  },
  cargoTypeDescription: {
      Id: {
        type: Number,
        required: true
      },
      Name:{
        type: String,
        required: true
      }
  },
  countryOfOriginCode: {
      Id: {
        type: Number,
        required: true
      },
      Name:{
        type: String,
        required: true
      }
  },
  finalDestinationCountry: {
      Id: {
        type: Number,
        required: true
      },
      Name:{
        type: String,
        required: true
      }
  },
  totalGrossVolume: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  totalGrossWeight: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  totalTransportNetWeight: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  totalChargeableWeight: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  declaredWeightForCustoms: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  totalLoadingLength: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  associatedInvoiceAmount: {
      Value: {
        type: String,
        required: true
        },
     Measurementtype:{
        type: String,
        required: true
        },
  },
  declaredValueForCustoms: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  totalPackageQuantity: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  totalItemQuantity: {
    Value: {
      type: String,
      required: true
      },
   Measurementtype:{
      type: String,
      required: true
      },
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportcargocharacteristicstypes", TransportcargocharacteristicstypeScheema);