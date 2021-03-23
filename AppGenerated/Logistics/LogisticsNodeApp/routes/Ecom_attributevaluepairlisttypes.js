const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Ecom_attributevaluepairlisttype = require("../models/Ecom_attributevaluepairlisttype");
const Ecomstringattributevaluepairlist= require("../models/Ecomstringattributevaluepairlist");

router.get("/", verify, async (req, res) => {
  try {
    const Ecom_attributevaluepairlisttypes = await Ecom_attributevaluepairlisttype.find();
    res.json(Ecom_attributevaluepairlisttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const ecom_attributevaluepairlisttype = await Ecom_attributevaluepairlisttype.findById(req.params.id);
    res.json({
        _id: ecom_attributevaluepairlisttype._id,
        id: ecom_attributevaluepairlisttype.id,
        eComStringAttributeValuePairList: ecom_attributevaluepairlisttype.eComStringAttributeValuePairList,
        eComStringAttributeValuePairListId: ecom_attributevaluepairlisttype.eComStringAttributeValuePairList.Id,
        createdAt: ecom_attributevaluepairlisttype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const ecomstringattributevaluepairlists = await Ecomstringattributevaluepairlist.findById(req.body.eComStringAttributeValuePairListId);
    const ecom_attributevaluepairlisttype = new Ecom_attributevaluepairlisttype ({
        id: req.body.id,
        eComStringAttributeValuePairList: req.body.eComStringAttributeValuePairList,
        eComStringAttributeValuePairList: [{
          Id: ecomstringattributevaluepairlists._id,
          Name: ecomstringattributevaluepairlists.qualifierCodeName
        }],
    });
    const savedEcom_attributevaluepairlisttype = await ecom_attributevaluepairlisttype.save();
    res.status(200).json(savedEcom_attributevaluepairlisttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedEcom_attributevaluepairlisttype = await Ecom_attributevaluepairlisttype.remove({ _id: req.params.id });
    res.json(removedEcom_attributevaluepairlisttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const ecomstringattributevaluepairlist = await Ecomstringattributevaluepairlist.findById(req.body.eComStringAttributeValuePairListId);
    const updatedEcom_attributevaluepairlisttype = await Ecom_attributevaluepairlisttype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             eComStringAttributeValuePairList: req.body.eComStringAttributeValuePairList,
             eComStringAttributeValuePairList: {
              Id: req.body.ecomstringattributevaluepairlist.id,
              Name: req.body.ecomstringattributevaluepairlist.qualifierCodeName
             },

        }
      }
    );
    res.json(updatedEcom_attributevaluepairlisttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;