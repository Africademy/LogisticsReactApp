const mongoose = require("mongoose");

const TransportcapacitybookingScheema = mongoose.Schema({
  bookingId: {
    type: Number,
    required: true
  },
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
      // required: false
    },
    LogisticEventDateTime: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Logisticeventdatetimes',
      // required: false
    },
    LogisticEventPeriod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Logisticeventperiods',
      // required: false
    }
  },
  plannedDropOff: {
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
    required: false
  },
  transportCapacityBookingIdentification: {
    type: String,
    required: false
  },
  transportServiceCategoryCode: {
    Id: {
      type: String,
      required: false
    },
    Name: {
      type: String,
      required: false
    },
  },
  transportServiceConditionTypeCode: {
    Id: {
      type: String,
      required: false
    },
    Name: {
      type: String,
      required: false
    },
  },
  transportServiceLevelCode: {
    Id: {
      type: String,
      required: false
    },
    Name: {
      type: String,
      required: false
    },
  },
  logisticServicesBuyer: {
    Id: {
      type: String,
      required: false
    },
    Name: {
      type: String,
      required: false
    },
  },
  logisticServicesSeller: {
    Id: {
      type: String,
      required: false
    },
    Name: {
      type: String,
      required: false
    },
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportcapacitybookings", TransportcapacitybookingScheema);