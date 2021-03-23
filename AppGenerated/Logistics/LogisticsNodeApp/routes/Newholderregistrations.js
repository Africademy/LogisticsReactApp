const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Newholderregistration = require("../models/Newholderregistration");

router.get("/", verify, async (req, res) => {
  try {
    const Newholderregistrations = await Newholderregistration.find();
    res.json(Newholderregistrations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const newholderregistration = await Newholderregistration.findById(req.params.id);
    res.json({
        _id: newholderregistration._id,
        identificationSchemeAgencyCode: newholderregistration.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: newholderregistration.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: newholderregistration.identificationSchemeAgencyName,
        identificationSchemeName: newholderregistration.identificationSchemeName,
        createdAt: newholderregistration.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const newholderregistration = new Newholderregistration ({
        identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
        identificationSchemeName: req.body.identificationSchemeName,
    });
    const savedNewholderregistration = await newholderregistration.save();
    res.status(200).json(savedNewholderregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedNewholderregistration = await Newholderregistration.remove({ _id: req.params.id });
    res.json(removedNewholderregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedNewholderregistration = await Newholderregistration.updateOne(
      { _id: req.params.id },
      {
        $set:{
             identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
             identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
             identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
             identificationSchemeName: req.body.identificationSchemeName,

        }
      }
    );
    res.json(updatedNewholderregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;