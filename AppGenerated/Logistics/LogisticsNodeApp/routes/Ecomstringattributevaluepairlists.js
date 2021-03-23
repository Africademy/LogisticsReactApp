const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Ecomstringattributevaluepairlist = require("../models/Ecomstringattributevaluepairlist");

router.get("/", verify, async (req, res) => {
  try {
    const Ecomstringattributevaluepairlists = await Ecomstringattributevaluepairlist.find();
    res.json(Ecomstringattributevaluepairlists);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const ecomstringattributevaluepairlist = await Ecomstringattributevaluepairlist.findById(req.params.id);
    res.json({
        _id: ecomstringattributevaluepairlist._id,
        attributeName: ecomstringattributevaluepairlist.attributeName,
        qualifierCodeName: ecomstringattributevaluepairlist.qualifierCodeName,
        qualifierCodeList: ecomstringattributevaluepairlist.qualifierCodeList,
        qualifierCodeListVersion: ecomstringattributevaluepairlist.qualifierCodeListVersion,
        createdAt: ecomstringattributevaluepairlist.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const ecomstringattributevaluepairlist = new Ecomstringattributevaluepairlist ({
        attributeName: req.body.attributeName,
        qualifierCodeName: req.body.qualifierCodeName,
        qualifierCodeList: req.body.qualifierCodeList,
        qualifierCodeListVersion: req.body.qualifierCodeListVersion,
    });
    const savedEcomstringattributevaluepairlist = await ecomstringattributevaluepairlist.save();
    res.status(200).json(savedEcomstringattributevaluepairlist);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedEcomstringattributevaluepairlist = await Ecomstringattributevaluepairlist.remove({ _id: req.params.id });
    res.json(removedEcomstringattributevaluepairlist);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedEcomstringattributevaluepairlist = await Ecomstringattributevaluepairlist.updateOne(
      { _id: req.params.id },
      {
        $set:{
             attributeName: req.body.attributeName,
             qualifierCodeName: req.body.qualifierCodeName,
             qualifierCodeList: req.body.qualifierCodeList,
             qualifierCodeListVersion: req.body.qualifierCodeListVersion,

        }
      }
    );
    res.json(updatedEcomstringattributevaluepairlist);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;