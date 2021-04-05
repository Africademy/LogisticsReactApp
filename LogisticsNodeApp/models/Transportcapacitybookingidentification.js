const mongoose = require("mongoose");

const TransportcapacitybookingidentificationScheema = mongoose.Schema({
  entityIdentification: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportcapacitybookingidentifications", TransportcapacitybookingidentificationScheema);