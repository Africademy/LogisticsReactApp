const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dutyfeetaxregistrationid = require("../models/Dutyfeetaxregistrationid");

router.get("/", verify, async (req, res) => {
  try {
    const Dutyfeetaxregistrationids = await Dutyfeetaxregistrationid.find();
    res.json(Dutyfeetaxregistrationids);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dutyfeetaxregistrationid = await Dutyfeetaxregistrationid.findById(req.params.id);
    res.json({
        _id: dutyfeetaxregistrationid._id,
        identificationSchemeAgencyCode: dutyfeetaxregistrationid.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: dutyfeetaxregistrationid.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: dutyfeetaxregistrationid.identificationSchemeAgencyName,
        identificationSchemeName: dutyfeetaxregistrationid.identificationSchemeName,
        createdAt: dutyfeetaxregistrationid.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dutyfeetaxregistrationid = new Dutyfeetaxregistrationid ({
        identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
        identificationSchemeName: req.body.identificationSchemeName,
    });
    const savedDutyfeetaxregistrationid = await dutyfeetaxregistrationid.save();
    res.status(200).json(savedDutyfeetaxregistrationid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDutyfeetaxregistrationid = await Dutyfeetaxregistrationid.remove({ _id: req.params.id });
    res.json(removedDutyfeetaxregistrationid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDutyfeetaxregistrationid = await Dutyfeetaxregistrationid.updateOne(
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
    res.json(updatedDutyfeetaxregistrationid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;