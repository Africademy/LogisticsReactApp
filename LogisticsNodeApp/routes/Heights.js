const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Height = require("../models/Height");

router.get("/", verify, async (req, res) => {
  try {
    const Heights = await Height.find();
    res.json(Heights);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const height = await Height.findById(req.params.id);
    res.json({
        _id: height._id,
        measurementUnitCode: height.measurementUnitCode,
        codeListVersion: height.codeListVersion,
        createdAt: height.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const height = new Height ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedHeight = await height.save();
    res.status(200).json(savedHeight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedHeight = await Height.remove({ _id: req.params.id });
    res.json(removedHeight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedHeight = await Height.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedHeight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;