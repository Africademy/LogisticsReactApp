const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Totaltransportnetweight = require("../models/Totaltransportnetweight");

router.get("/", verify, async (req, res) => {
  try {
    const Totaltransportnetweights = await Totaltransportnetweight.find();
    res.json(Totaltransportnetweights);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const totaltransportnetweight = await Totaltransportnetweight.findById(req.params.id);
    res.json({
        _id: totaltransportnetweight._id,
        measurementUnitCode: totaltransportnetweight.measurementUnitCode,
        codeListVersion: totaltransportnetweight.codeListVersion,
        createdAt: totaltransportnetweight.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const totaltransportnetweight = new Totaltransportnetweight ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTotaltransportnetweight = await totaltransportnetweight.save();
    res.status(200).json(savedTotaltransportnetweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTotaltransportnetweight = await Totaltransportnetweight.remove({ _id: req.params.id });
    res.json(removedTotaltransportnetweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTotaltransportnetweight = await Totaltransportnetweight.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTotaltransportnetweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;