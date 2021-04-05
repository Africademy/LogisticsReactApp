const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportmeansid = require("../models/Transportmeansid");

router.get("/", verify, async (req, res) => {
  try {
    const Transportmeansids = await Transportmeansid.find();
    res.json(Transportmeansids);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportmeansid = await Transportmeansid.findById(req.params.id);
    res.json({
        _id: transportmeansid._id,
        identificationSchemeAgencyCode: transportmeansid.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: transportmeansid.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: transportmeansid.identificationSchemeAgencyName,
        identificationSchemeName: transportmeansid.identificationSchemeName,
        createdAt: transportmeansid.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportmeansid = new Transportmeansid ({
        identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
        identificationSchemeName: req.body.identificationSchemeName,
    });
    const savedTransportmeansid = await transportmeansid.save();
    res.status(200).json(savedTransportmeansid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportmeansid = await Transportmeansid.remove({ _id: req.params.id });
    res.json(removedTransportmeansid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportmeansid = await Transportmeansid.updateOne(
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
    res.json(updatedTransportmeansid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;