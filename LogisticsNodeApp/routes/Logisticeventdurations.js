const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticeventduration = require("../models/Logisticeventduration");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticeventdurations = await Logisticeventduration.find();
    res.json(Logisticeventdurations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticeventduration = await Logisticeventduration.findById(req.params.id);
    res.json({
        _id: logisticeventduration._id,
        timeMeasurementUnitCode: logisticeventduration.timeMeasurementUnitCode,
        codeListVersion: logisticeventduration.codeListVersion,
        createdAt: logisticeventduration.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const logisticeventduration = new Logisticeventduration ({
        timeMeasurementUnitCode: req.body.timeMeasurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedLogisticeventduration = await logisticeventduration.save();
    res.status(200).json(savedLogisticeventduration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticeventduration = await Logisticeventduration.remove({ _id: req.params.id });
    res.json(removedLogisticeventduration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLogisticeventduration = await Logisticeventduration.updateOne(
      { _id: req.params.id },
      {
        $set:{
             timeMeasurementUnitCode: req.body.timeMeasurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedLogisticeventduration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;