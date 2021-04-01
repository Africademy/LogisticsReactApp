const mongoose = require("mongoose");

const TransportcapacitybookingScheema = mongoose.Schema({
  transportCapacityBookingSpaceRequirements: {
      Transportcargocharacteristicstypes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transportcargocharacteristicstypes',
        required: false
      },
      Packagetotaltypes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Packagetotaltypes',
        required: false
      }
  },
  plannedPickUp: {
      Logisticlocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Logisticlocationtypes',
        required: false
      },
      LogisticEventDateTime: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Logisticeventdatetimes',
        required: false
      },
      LogisticEventPeriod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Logisticeventperiods',
        required: false
      }
  },
  plannedDropOff: {
    type: [{
      Logisticlocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Logisticlocationtypes',
        required: false
      },
      LogisticEventDateTime: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Logisticeventdatetimes',
        required: false
      },
      LogisticEventPeriod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Logisticeventperiods',
        required: false
      },
    }],
    required: false
  },
  transportCapacityBookingIdentification: {
    type: String,
    required: false
  },
  transportServiceCategoryCode: {
    type: [{
      Id: {
        type: String,
        required: false
      },
      Name: {
        type: String,
        required: false
      },
    }],
    required: false
  },
  transportServiceConditionTypeCode: {
    type: [{
      Id: {
        type: String,
        required: false
      },
      Name: {
        type: String,
        required: false
      },
    }],
    required: false
  },
  transportServiceLevelCode: {
    type: [{
      Id: {
        type: String,
        required: false
      },
      Name: {
        type: String,
        required: false
      },
    }],
    required: false
  },
  logisticServicesBuyer: {
    type: [{
      Id: {
        type: String,
        required: false
      },
      Name: {
        type: String,
        required: false
      },
    }],
    required: false
  },
  logisticServicesSeller: {
    type: [{
      Id: {
        type: String,
        required: false
      },
      Name: {
        type: String,
        required: false
      },
    }],
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportcapacitybookings", TransportcapacitybookingScheema);