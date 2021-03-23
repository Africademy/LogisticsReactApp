const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Temperaturerangetype = require("../models/Temperaturerangetype");

router.get("/", verify, async (req, res) => {
  try {
    const Temperaturerangetypes = await Temperaturerangetype.find();
    res.json(Temperaturerangetypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const temperaturerangetype = await Temperaturerangetype.findById(req.params.id);
    res.json({
        _id: temperaturerangetype._id,
        id: temperaturerangetype.id,
        maximumTemperature: temperaturerangetype.maximumTemperature,
        minimumTemperature: temperaturerangetype.minimumTemperature,
        minimumTemperatureId: temperaturerangetype.minimumTemperature.Id,
        maximumTemperatureId: temperaturerangetype.maximumTemperature.Id,
        createdAt: temperaturerangetype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const minimumtemperatures = await Timemeasurementtype.findById(req.body.minimumTemperatureId);
    const maximumtemperatures = await Timemeasurementtype.findById(req.body.maximumTemperatureId);
    const temperaturerangetype = new Temperaturerangetype ({
        id: req.body.id,
        maximumTemperature: req.body.maximumTemperature,
        minimumTemperature: req.body.minimumTemperature,
        minimumTemperature: [{
          Id: minimumtemperatures._id,
          Name: minimumtemperatures.id
        }],
        maximumTemperature: [{
          Id: maximumtemperatures._id,
          Name: maximumtemperatures.id
        }],
    });
    const savedTemperaturerangetype = await temperaturerangetype.save();
    res.status(200).json(savedTemperaturerangetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTemperaturerangetype = await Temperaturerangetype.remove({ _id: req.params.id });
    res.json(removedTemperaturerangetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const minimumtemperature = await Timemeasurementtype.findById(req.body.minimumTemperatureId);
    const updatedTemperaturerangetype = await Temperaturerangetype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             maximumTemperature: req.body.maximumTemperature,
             minimumTemperature: req.body.minimumTemperature,
             minimumTemperature: {
              Id: req.body.minimumtemperature.id,
              Name: req.body.minimumtemperature.id
             },
             minimumTemperature: {
              Id: req.body.minimumtemperature.id,
              Name: req.body.minimumtemperature.id
             },

        }
      }
    );
    res.json(updatedTemperaturerangetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;