const mongoose = require("mongoose");

const LogisticlocationtypeScheema = mongoose.Schema({
  unLocationCode: {
    type: Number,
    required: false,
  },
  // gln: {
  //   type: String,
  //   required: false
  // },
  sublocationIdentification: {
    type: String,
    required: false,
  },
  locationName: {
    type: String,
    required: false,
  },
  utcOffset: {
    type: Number,
    required: false,
  },
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contacttypes",
    required: false,
  },
  locationSpecificInstructions: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  additionalLocationIdentification: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  cityCode: {
    type: String,
    required: false,
  },
  countryCode: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  countyCode: {
    type: String,
    required: false,
  },
  crossStreet: {
    type: String,
    required: false,
  },
  currencyOfParty: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  languageOfTheParty: {
    Id: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  name: {
    type: String,
    required: false,
  },
  pOBoxNumber: {
    type: String,
    required: false,
  },
  postalCode: {
    type: String,
    required: false,
  },
  provinceCode: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  streetAddressOne: {
    type: String,
    required: false,
  },
  streetAddressTwo: {
    type: String,
    required: false,
  },
  streetAddressThree: {
    type: String,
    required: false,
  },
  latitude: {
    type: String,
    required: false,
  },
  longitude: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Logisticlocationtypes",
  LogisticlocationtypeScheema
);
