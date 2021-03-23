const mongoose = require("mongoose");

const TransportcapacitybookingresponseidentificationScheema = mongoose.Schema({
  entityIdentification: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transportcapacitybookingresponseidentifications", TransportcapacitybookingresponseidentificationScheema);