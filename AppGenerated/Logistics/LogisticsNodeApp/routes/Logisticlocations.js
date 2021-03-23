const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticlocation = require("../models/Logisticlocation");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticlocations = await Logisticlocation.find();
    res.json(Logisticlocations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticlocation = await Logisticlocation.findById(req.params.id);
    res.json({
        _id: logisticlocation._id,
        gln: logisticlocation.gln,
        sublocationIdentification: logisticlocation.sublocationIdentification,
        locationName: logisticlocation.locationName,
        utcOffset: logisticlocation.utcOffset,
        createdAt: logisticlocation.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const logisticlocation = new Logisticlocation ({
        gln: req.body.gln,
        sublocationIdentification: req.body.sublocationIdentification,
        locationName: req.body.locationName,
        utcOffset: req.body.utcOffset,
    });
    const savedLogisticlocation = await logisticlocation.save();
    res.status(200).json(savedLogisticlocation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticlocation = await Logisticlocation.remove({ _id: req.params.id });
    res.json(removedLogisticlocation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLogisticlocation = await Logisticlocation.updateOne(
      { _id: req.params.id },
      {
        $set:{
             gln: req.body.gln,
             sublocationIdentification: req.body.sublocationIdentification,
             locationName: req.body.locationName,
             utcOffset: req.body.utcOffset,

        }
      }
    );
    res.json(updatedLogisticlocation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;