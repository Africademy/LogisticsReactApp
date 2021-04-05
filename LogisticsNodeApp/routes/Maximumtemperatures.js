const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Maximumtemperature = require("../models/Maximumtemperature");

router.get("/", verify, async (req, res) => {
  try {
    const Maximumtemperatures = await Maximumtemperature.find();
    res.json(Maximumtemperatures);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const maximumtemperature = await Maximumtemperature.findById(req.params.id);
    res.json({
        _id: maximumtemperature._id,
        temperatureMeasurementUnitCode: maximumtemperature.temperatureMeasurementUnitCode,
        codeListVersion: maximumtemperature.codeListVersion,
        createdAt: maximumtemperature.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const maximumtemperature = new Maximumtemperature ({
        temperatureMeasurementUnitCode: req.body.temperatureMeasurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedMaximumtemperature = await maximumtemperature.save();
    res.status(200).json(savedMaximumtemperature);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedMaximumtemperature = await Maximumtemperature.remove({ _id: req.params.id });
    res.json(removedMaximumtemperature);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedMaximumtemperature = await Maximumtemperature.updateOne(
      { _id: req.params.id },
      {
        $set:{
             temperatureMeasurementUnitCode: req.body.temperatureMeasurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedMaximumtemperature);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;