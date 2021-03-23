const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dutyfeetaxregistration = require("../models/Dutyfeetaxregistration");

router.get("/", verify, async (req, res) => {
  try {
    const Dutyfeetaxregistrations = await Dutyfeetaxregistration.find();
    res.json(Dutyfeetaxregistrations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dutyfeetaxregistration = await Dutyfeetaxregistration.findById(req.params.id);
    res.json({
        _id: dutyfeetaxregistration._id,
        dutyFeeTaxAgencyName: dutyfeetaxregistration.dutyFeeTaxAgencyName,
        createdAt: dutyfeetaxregistration.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dutyfeetaxregistration = new Dutyfeetaxregistration ({
        dutyFeeTaxAgencyName: req.body.dutyFeeTaxAgencyName,
    });
    const savedDutyfeetaxregistration = await dutyfeetaxregistration.save();
    res.status(200).json(savedDutyfeetaxregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDutyfeetaxregistration = await Dutyfeetaxregistration.remove({ _id: req.params.id });
    res.json(removedDutyfeetaxregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDutyfeetaxregistration = await Dutyfeetaxregistration.updateOne(
      { _id: req.params.id },
      {
        $set:{
             dutyFeeTaxAgencyName: req.body.dutyFeeTaxAgencyName,

        }
      }
    );
    res.json(updatedDutyfeetaxregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;