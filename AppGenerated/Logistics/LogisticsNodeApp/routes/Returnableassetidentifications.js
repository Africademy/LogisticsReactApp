const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Returnableassetidentification = require("../models/Returnableassetidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Returnableassetidentifications = await Returnableassetidentification.find();
    res.json(Returnableassetidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const returnableassetidentification = await Returnableassetidentification.findById(req.params.id);
    res.json({
        _id: returnableassetidentification._id,
        id: returnableassetidentification.id,
        grai: returnableassetidentification.grai,
        additionalReturnableAssetIdentification: returnableassetidentification.additionalReturnableAssetIdentification,
        additionalReturnableAssetIdentificationId: returnableassetidentification.additionalReturnableAssetIdentification.Id,
        createdAt: returnableassetidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalreturnableassetidentifications = await Enumerationlibrary.findById(req.body.additionalReturnableAssetIdentificationId);
    const returnableassetidentification = new Returnableassetidentification ({
        id: req.body.id,
        grai: req.body.grai,
        additionalReturnableAssetIdentification: req.body.additionalReturnableAssetIdentification,
        additionalReturnableAssetIdentification: [{
          Id: additionalreturnableassetidentifications._id,
          Name: additionalreturnableassetidentifications.id
        }],
    });
    const savedReturnableassetidentification = await returnableassetidentification.save();
    res.status(200).json(savedReturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedReturnableassetidentification = await Returnableassetidentification.remove({ _id: req.params.id });
    res.json(removedReturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const additionalreturnableassetidentification = await Enumerationlibrary.findById(req.body.additionalReturnableAssetIdentificationId);
    const updatedReturnableassetidentification = await Returnableassetidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             grai: req.body.grai,
             additionalReturnableAssetIdentification: req.body.additionalReturnableAssetIdentification,
             additionalReturnableAssetIdentification: {
              Id: req.body.additionalreturnableassetidentification.id,
              Name: req.body.additionalreturnableassetidentification.id
             },

        }
      }
    );
    res.json(updatedReturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;