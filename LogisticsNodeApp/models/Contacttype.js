const mongoose = require("mongoose");

const ContacttypeScheema = mongoose.Schema({
  personName: {
    type: String,
    required: false,
  },
  departmentName: {
    type: String,
    required: false,
  },
  jobTitle: {
    type: String,
    required: false,
  },
  communicationValue: {
    type: String,
    required: false,
  },
  communicationChannelName: {
    type: String,
    required: false,
  },
  communicationChannelCode: {
    Id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  responsibility: {
    Id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  contactTypeCode: {
    Id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contacttypes", ContacttypeScheema);
