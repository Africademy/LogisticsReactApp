const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Currentholderregistration = require("../models/Currentholderregistration");

router.get("/", verify, async (req, res) => {
  try {
    const Currentholderregistrations = await Currentholderregistration.find();
    res.json(Currentholderregistrations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const currentholderregistration = await Currentholderregistration.findById(req.params.id);
    res.json({
        _id: currentholderregistration._id,
        identificationSchemeAgencyCode: currentholderregistration.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: currentholderregistration.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: currentholderregistration.identificationSchemeAgencyName,
        identificationSchemeName: currentholderregistration.identificationSchemeName,
        createdAt: currentholderregistration.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const currentholderregistration = new Currentholderregistration ({
        identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
        identificationSchemeName: req.body.identificationSchemeName,
    });
    const savedCurrentholderregistration = await currentholderregistration.save();
    res.status(200).json(savedCurrentholderregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCurrentholderregistration = await Currentholderregistration.remove({ _id: req.params.id });
    res.json(removedCurrentholderregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCurrentholderregistration = await Currentholderregistration.updateOne(
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
    res.json(updatedCurrentholderregistration);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;