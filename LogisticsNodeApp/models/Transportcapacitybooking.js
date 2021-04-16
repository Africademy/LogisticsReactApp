const mongoose = require("mongoose");

const TransportcapacitybookingScheema = mongoose.Schema({
  bookingId: {
    type: Number,
    required: true,
    default: 1000000000000,
  },
  transportCapacityBookingSpaceRequirements: {
    Transportcargocharacteristicstypes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transportcargocharacteristicstypes",
      required: true,
    },
    Packagetotaltypes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Packagetotaltypes",
      required: true,
    },
  },
  plannedPickUp: {
    Logisticlocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Logisticlocationtypes",
      required: true,
    },
    LogisticEventDateTime: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Logisticeventdatetimes",
      required: false,
    },
    LogisticEventPeriod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Logisticeventperiods",
      required: true,
    },
  },
  plannedDropOff: {
    Logisticlocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Logisticlocationtypes",
      required: true,
    },
    LogisticEventDateTime: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Logisticeventdatetimes",
      required: false,
    },
    LogisticEventPeriod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Logisticeventperiods",
      required: true,
    },
  },
  transportCapacityBookingIdentification: {
    type: String,
    required: false,
  },
  transportServiceCategoryCode: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: false,
    },
  },
  transportServiceConditionTypeCode: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: false,
    },
  },
  transportServiceLevelCode: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: false,
    },
  },
  logisticServicesBuyer: {
    Id: {
      type: String,
      required: false,
    },
    Name: {
      type: String,
      required: false,
    },
  },
  logisticServicesSeller: {
    Id: {
      type: String,
      required: false,
    },
    Name: {
      type: String,
      required: false,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Transportcapacitybookings",
  TransportcapacitybookingScheema
);
