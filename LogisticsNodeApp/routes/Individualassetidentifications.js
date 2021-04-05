const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Individualassetidentification = require("../models/Individualassetidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Individualassetidentifications = await Individualassetidentification.find();
    res.json(Individualassetidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const individualassetidentification = await Individualassetidentification.findById(req.params.id);
    res.json({
        _id: individualassetidentification._id,
        id: individualassetidentification.id,
        giai: individualassetidentification.giai,
        additionalIndividualAssetIdentification: individualassetidentification.additionalIndividualAssetIdentification,
        additionalIndividualAssetIdentificationId: individualassetidentification.additionalIndividualAssetIdentification.Id,
        createdAt: individualassetidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalindividualassetidentifications = await Enumerationlibrary.findById(req.body.additionalIndividualAssetIdentificationId);
    const individualassetidentification = new Individualassetidentification ({
        id: req.body.id,
        giai: req.body.giai,
        additionalIndividualAssetIdentification: req.body.additionalIndividualAssetIdentification,
        additionalIndividualAssetIdentification: [{
          Id: additionalindividualassetidentifications._id,
          Name: additionalindividualassetidentifications.id
        }],
    });
    const savedIndividualassetidentification = await individualassetidentification.save();
    res.status(200).json(savedIndividualassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIndividualassetidentification = await Individualassetidentification.remove({ _id: req.params.id });
    res.json(removedIndividualassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const additionalindividualassetidentification = await Enumerationlibrary.findById(req.body.additionalIndividualAssetIdentificationId);
    const updatedIndividualassetidentification = await Individualassetidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             giai: req.body.giai,
             additionalIndividualAssetIdentification: req.body.additionalIndividualAssetIdentification,
             additionalIndividualAssetIdentification: {
              Id: req.body.additionalindividualassetidentification.id,
              Name: req.body.additionalindividualassetidentification.id
             },

        }
      }
    );
    res.json(updatedIndividualassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;