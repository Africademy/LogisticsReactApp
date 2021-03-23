const mongoose = require("mongoose");

const Tab2Scheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  varcharcol: {
    type: String,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tab2s", Tab2Scheema);