const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Unitmeasurementtype = require("../models/Unitmeasurementtype");

router.get("/", verify, async (req, res) => {
  try {
    const Unitmeasurementtypes = await Unitmeasurementtype.find();
    res.json(Unitmeasurementtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const unitmeasurementtype = await Unitmeasurementtype.findById(req.params.id);
    res.json({
        _id: unitmeasurementtype._id,
        id: unitmeasurementtype.id,
        measurementType: unitmeasurementtype.measurementType,
        measurementValue: unitmeasurementtype.measurementValue,
        measurementValueId: unitmeasurementtype.measurementValue.Id,
        createdAt: unitmeasurementtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const measurementvalues = await Measurementtype.findById(req.body.measurementValueId);
    const unitmeasurementtype = new Unitmeasurementtype ({
        id: req.body.id,
        measurementType: req.body.measurementType,
        measurementValue: req.body.measurementValue,
        measurementValue: [{
          Id: measurementvalues._id,
          Name: measurementvalues.id
        }],
    });
    const savedUnitmeasurementtype = await unitmeasurementtype.save();
    res.status(200).json(savedUnitmeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedUnitmeasurementtype = await Unitmeasurementtype.remove({ _id: req.params.id });
    res.json(removedUnitmeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const measurementvalue = await Measurementtype.findById(req.body.measurementValueId);
    const updatedUnitmeasurementtype = await Unitmeasurementtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             measurementType: req.body.measurementType,
             measurementValue: req.body.measurementValue,
             measurementValue: {
              Id: req.body.measurementvalue.id,
              Name: req.body.measurementvalue.id
             },

        }
      }
    );
    res.json(updatedUnitmeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;