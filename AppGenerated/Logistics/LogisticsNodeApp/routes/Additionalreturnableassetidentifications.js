const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Additionalreturnableassetidentification = require("../models/Additionalreturnableassetidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Additionalreturnableassetidentifications = await Additionalreturnableassetidentification.find();
    res.json(Additionalreturnableassetidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const additionalreturnableassetidentification = await Additionalreturnableassetidentification.findById(req.params.id);
    res.json({
        _id: additionalreturnableassetidentification._id,
        additionalReturnableAssetIdentificationTypeCode: additionalreturnableassetidentification.additionalReturnableAssetIdentificationTypeCode,
        codeListVersion: additionalreturnableassetidentification.codeListVersion,
        createdAt: additionalreturnableassetidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalreturnableassetidentification = new Additionalreturnableassetidentification ({
        additionalReturnableAssetIdentificationTypeCode: req.body.additionalReturnableAssetIdentificationTypeCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAdditionalreturnableassetidentification = await additionalreturnableassetidentification.save();
    res.status(200).json(savedAdditionalreturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAdditionalreturnableassetidentification = await Additionalreturnableassetidentification.remove({ _id: req.params.id });
    res.json(removedAdditionalreturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAdditionalreturnableassetidentification = await Additionalreturnableassetidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             additionalReturnableAssetIdentificationTypeCode: req.body.additionalReturnableAssetIdentificationTypeCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAdditionalreturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;