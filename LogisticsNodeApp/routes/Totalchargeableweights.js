const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Totalchargeableweight = require("../models/Totalchargeableweight");

router.get("/", verify, async (req, res) => {
  try {
    const Totalchargeableweights = await Totalchargeableweight.find();
    res.json(Totalchargeableweights);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const totalchargeableweight = await Totalchargeableweight.findById(req.params.id);
    res.json({
        _id: totalchargeableweight._id,
        measurementUnitCode: totalchargeableweight.measurementUnitCode,
        codeListVersion: totalchargeableweight.codeListVersion,
        createdAt: totalchargeableweight.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const totalchargeableweight = new Totalchargeableweight ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTotalchargeableweight = await totalchargeableweight.save();
    res.status(200).json(savedTotalchargeableweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTotalchargeableweight = await Totalchargeableweight.remove({ _id: req.params.id });
    res.json(removedTotalchargeableweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTotalchargeableweight = await Totalchargeableweight.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTotalchargeableweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;