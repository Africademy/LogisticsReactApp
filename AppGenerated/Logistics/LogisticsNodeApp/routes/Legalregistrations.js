const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Legalregistration = require("../models/Legalregistration");

router.get("/", verify, async (req, res) => {
  try {
    const Legalregistrations = await Legalregistration.find();
    res.json(Legalregistrations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const legalregistration = await Legalregistration.findById(req.params.id);
    res.json({
        _id: legalregistration._id,
        legalRegistrationNumber: legalregistration.legalRegistrationNumber,
        createdAt: legalregistration.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const legalregistration = new Legalregistration ({
        legalRegistrationNumber: req.body.legalRegistrationNumber,
    });
    const savedLegalregistration = await legalregistration.save();
    res.status(200).json(savedLegalregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLegalregistration = await Legalregistration.remove({ _id: req.params.id });
    res.json(removedLegalregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLegalregistration = await Legalregistration.updateOne(
      { _id: req.params.id },
      {
        $set:{
             legalRegistrationNumber: req.body.legalRegistrationNumber,

        }
      }
    );
    res.json(updatedLegalregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;