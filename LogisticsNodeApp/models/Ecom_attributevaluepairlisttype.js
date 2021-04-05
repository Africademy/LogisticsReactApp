const mongoose = require("mongoose");

const Ecom_attributevaluepairlisttypeScheema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  eComStringAttributeValuePairList: {
    type: String,
    required: false
  },
  eComStringAttributeValuePairList: {
    type: [{
      Id: {
         type: String,
         required: true
         },
      Name:{
         type: String,
         required: true
         },
    }],
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Ecom_attributevaluepairlisttypes", Ecom_attributevaluepairlisttypeScheema);