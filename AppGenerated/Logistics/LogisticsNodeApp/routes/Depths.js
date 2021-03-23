const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Depth = require("../models/Depth");

router.get("/", verify, async (req, res) => {
  try {
    const Depths = await Depth.find();
    res.json(Depths);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const depth = await Depth.findById(req.params.id);
    res.json({
        _id: depth._id,
        measurementUnitCode: depth.measurementUnitCode,
        codeListVersion: depth.codeListVersion,
        createdAt: depth.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const depth = new Depth ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDepth = await depth.save();
    res.status(200).json(savedDepth);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDepth = await Depth.remove({ _id: req.params.id });
    res.json(removedDepth);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDepth = await Depth.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDepth);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;