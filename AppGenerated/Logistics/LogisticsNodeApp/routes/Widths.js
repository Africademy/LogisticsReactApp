const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Width = require("../models/Width");

router.get("/", verify, async (req, res) => {
  try {
    const Widths = await Width.find();
    res.json(Widths);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const width = await Width.findById(req.params.id);
    res.json({
        _id: width._id,
        measurementUnitCode: width.measurementUnitCode,
        codeListVersion: width.codeListVersion,
        createdAt: width.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const width = new Width ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedWidth = await width.save();
    res.status(200).json(savedWidth);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedWidth = await Width.remove({ _id: req.params.id });
    res.json(removedWidth);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedWidth = await Width.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedWidth);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;