const mongoose = require("mongoose");

const TransportcapacitybookingScheema = mongoose.Schema({
  bookingid: {
    type: Number,
    required: true
  },
  creationDateTime: {
    type: Date,
    required: true
  },
  documentStatusCode: {
    type: Number,
    required: true
  },
  documentActionCode: {
    type: Number,
    required: false
  },
  documentStructureVersion: {
    type: String,
    required: false
  },
  lastUpdateDateTime: {
    type: Date,
    required: false
  },
  revisionNumber: {
    type: Number,
    required: false
  },
  extension: {
    type: String,
    required: false
  },
  documentEffectiveDate: {
    type: Date,
    required: false
  },
  avpList: {
    type: String,
    required: false
  },
  transportCapacityBookingIdentification: {
    type: Number,
    required: false
  },
  transportServiceCategoryCode: {
    type: Number,
    required: true
  },
  transportServiceConditionTypeCode: {
    type: Number,
    required: false
  },
  transportServiceLevelCode: {
    type: Number,
    required: false
  },
  logisticServicesBuyer: {
    type: Number,
    required: true
  },
  logisticServicesSeller: {
    type: Number,
    required: true
  },
  pickUpParty: {
    type: Number,
    required: false
  },
  dropOffParty: {
    type: Number,
    required: false
  },
  plannedPickUp: {
    type: Number,
    required: false
  },
  plannedDropOff: {
    type: Number,
    required: false
  },
  transportReference: {
    type: Number,
    required: false
  },
  deliveryTerms: {
    type: String,
    required: false
  },
  handlingInstruction: {
    type: Number,
    required: false
  },
  transportCapacityBookingSpaceRequirements: {
    type: Number,
    required: true
  },
  transportCapacityBookingTransportMovement: {
    type: Number,
    required: false
  },
  transportCapacityBookingSpaceRequirements: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  transportCapacityBookingTransportMovement: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  avpList: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  documentStatusCode: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  dropOffParty: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  plannedPickUp: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  plannedDropOff: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  transportReference: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  handlingInstruction: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  documentActionCode: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  transportCapacityBookingIdentification: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  transportServiceCategoryCode: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  transportServiceConditionTypeCode: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  transportServiceLevelCode: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  logisticServicesBuyer: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  logisticServicesSeller: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  pickUpParty: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  deliveryTerms: {
    type: [{
      Id: {
        type: String,
        required: true
      },
      Name: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportcapacitybookings", TransportcapacitybookingScheema);