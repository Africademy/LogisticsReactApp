const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Measurementtype = require("../models/Measurementtype");

router.get("/", verify, async (req, res) => {
  try {
    const Measurementtypes = await Measurementtype.find();
    res.json(Measurementtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const measurementtype = await Measurementtype.findById(req.params.id);
    res.json({
        _id: measurementtype._id,
        id: measurementtype.id,
        measurementUnitCode: measurementtype.measurementUnitCode,
        codeListVersion: measurementtype.codeListVersion,
        createdAt: measurementtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const measurementtype = new Measurementtype ({
        id: req.body.id,
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedMeasurementtype = await measurementtype.save();
    res.status(200).json(savedMeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedMeasurementtype = await Measurementtype.remove({ _id: req.params.id });
    res.json(removedMeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedMeasurementtype = await Measurementtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedMeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;