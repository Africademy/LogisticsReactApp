const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Totalgrossweight = require("../models/Totalgrossweight");

router.get("/", verify, async (req, res) => {
  try {
    const Totalgrossweights = await Totalgrossweight.find();
    res.json(Totalgrossweights);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const totalgrossweight = await Totalgrossweight.findById(req.params.id);
    res.json({
        _id: totalgrossweight._id,
        measurementUnitCode: totalgrossweight.measurementUnitCode,
        codeListVersion: totalgrossweight.codeListVersion,
        createdAt: totalgrossweight.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const totalgrossweight = new Totalgrossweight ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTotalgrossweight = await totalgrossweight.save();
    res.status(200).json(savedTotalgrossweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTotalgrossweight = await Totalgrossweight.remove({ _id: req.params.id });
    res.json(removedTotalgrossweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTotalgrossweight = await Totalgrossweight.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTotalgrossweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;