const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Minimumtemperature = require("../models/Minimumtemperature");

router.get("/", verify, async (req, res) => {
  try {
    const Minimumtemperatures = await Minimumtemperature.find();
    res.json(Minimumtemperatures);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const minimumtemperature = await Minimumtemperature.findById(req.params.id);
    res.json({
        _id: minimumtemperature._id,
        temperatureMeasurementUnitCode: minimumtemperature.temperatureMeasurementUnitCode,
        codeListVersion: minimumtemperature.codeListVersion,
        createdAt: minimumtemperature.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const minimumtemperature = new Minimumtemperature ({
        temperatureMeasurementUnitCode: req.body.temperatureMeasurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedMinimumtemperature = await minimumtemperature.save();
    res.status(200).json(savedMinimumtemperature);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedMinimumtemperature = await Minimumtemperature.remove({ _id: req.params.id });
    res.json(removedMinimumtemperature);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedMinimumtemperature = await Minimumtemperature.updateOne(
      { _id: req.params.id },
      {
        $set:{
             temperatureMeasurementUnitCode: req.body.temperatureMeasurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedMinimumtemperature);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;