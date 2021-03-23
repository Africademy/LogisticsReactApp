const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Totalgrossvolume = require("../models/Totalgrossvolume");

router.get("/", verify, async (req, res) => {
  try {
    const Totalgrossvolumes = await Totalgrossvolume.find();
    res.json(Totalgrossvolumes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const totalgrossvolume = await Totalgrossvolume.findById(req.params.id);
    res.json({
        _id: totalgrossvolume._id,
        measurementUnitCode: totalgrossvolume.measurementUnitCode,
        codeListVersion: totalgrossvolume.codeListVersion,
        createdAt: totalgrossvolume.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const totalgrossvolume = new Totalgrossvolume ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTotalgrossvolume = await totalgrossvolume.save();
    res.status(200).json(savedTotalgrossvolume);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTotalgrossvolume = await Totalgrossvolume.remove({ _id: req.params.id });
    res.json(removedTotalgrossvolume);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTotalgrossvolume = await Totalgrossvolume.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTotalgrossvolume);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;