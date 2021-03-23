const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Additionalindividualassetidentification = require("../models/Additionalindividualassetidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Additionalindividualassetidentifications = await Additionalindividualassetidentification.find();
    res.json(Additionalindividualassetidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const additionalindividualassetidentification = await Additionalindividualassetidentification.findById(req.params.id);
    res.json({
        _id: additionalindividualassetidentification._id,
        additionalIndividualAssetIdentificationTypeCode: additionalindividualassetidentification.additionalIndividualAssetIdentificationTypeCode,
        codeListVersion: additionalindividualassetidentification.codeListVersion,
        createdAt: additionalindividualassetidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalindividualassetidentification = new Additionalindividualassetidentification ({
        additionalIndividualAssetIdentificationTypeCode: req.body.additionalIndividualAssetIdentificationTypeCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAdditionalindividualassetidentification = await additionalindividualassetidentification.save();
    res.status(200).json(savedAdditionalindividualassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAdditionalindividualassetidentification = await Additionalindividualassetidentification.remove({ _id: req.params.id });
    res.json(removedAdditionalindividualassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAdditionalindividualassetidentification = await Additionalindividualassetidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             additionalIndividualAssetIdentificationTypeCode: req.body.additionalIndividualAssetIdentificationTypeCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAdditionalindividualassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;