const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Timemeasurementtype = require("../models/Timemeasurementtype");

router.get("/", verify, async (req, res) => {
  try {
    const Timemeasurementtypes = await Timemeasurementtype.find();
    res.json(Timemeasurementtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const timemeasurementtype = await Timemeasurementtype.findById(req.params.id);
    res.json({
        _id: timemeasurementtype._id,
        id: timemeasurementtype.id,
        timeMeasurementUnitCode: timemeasurementtype.timeMeasurementUnitCode,
        codeListVersion: timemeasurementtype.codeListVersion,
        createdAt: timemeasurementtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const timemeasurementtype = new Timemeasurementtype ({
        id: req.body.id,
        timeMeasurementUnitCode: req.body.timeMeasurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTimemeasurementtype = await timemeasurementtype.save();
    res.status(200).json(savedTimemeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTimemeasurementtype = await Timemeasurementtype.remove({ _id: req.params.id });
    res.json(removedTimemeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTimemeasurementtype = await Timemeasurementtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             timeMeasurementUnitCode: req.body.timeMeasurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTimemeasurementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;