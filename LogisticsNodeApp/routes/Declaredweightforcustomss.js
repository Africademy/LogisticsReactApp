const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Declaredweightforcustoms = require("../models/Declaredweightforcustoms");

router.get("/", verify, async (req, res) => {
  try {
    const Declaredweightforcustomss = await Declaredweightforcustoms.find();
    res.json(Declaredweightforcustomss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const declaredweightforcustoms = await Declaredweightforcustoms.findById(req.params.id);
    res.json({
        _id: declaredweightforcustoms._id,
        measurementUnitCode: declaredweightforcustoms.measurementUnitCode,
        codeListVersion: declaredweightforcustoms.codeListVersion,
        createdAt: declaredweightforcustoms.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const declaredweightforcustoms = new Declaredweightforcustoms ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDeclaredweightforcustoms = await declaredweightforcustoms.save();
    res.status(200).json(savedDeclaredweightforcustoms);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDeclaredweightforcustoms = await Declaredweightforcustoms.remove({ _id: req.params.id });
    res.json(removedDeclaredweightforcustoms);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDeclaredweightforcustoms = await Declaredweightforcustoms.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDeclaredweightforcustoms);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;