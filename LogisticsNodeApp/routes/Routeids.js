const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Routeid = require("../models/Routeid");

router.get("/", verify, async (req, res) => {
  try {
    const Routeids = await Routeid.find();
    res.json(Routeids);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const routeid = await Routeid.findById(req.params.id);
    res.json({
        _id: routeid._id,
        identificationSchemeAgencyCode: routeid.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: routeid.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: routeid.identificationSchemeAgencyName,
        identificationSchemeName: routeid.identificationSchemeName,
        createdAt: routeid.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const routeid = new Routeid ({
        identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
        identificationSchemeName: req.body.identificationSchemeName,
    });
    const savedRouteid = await routeid.save();
    res.status(200).json(savedRouteid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedRouteid = await Routeid.remove({ _id: req.params.id });
    res.json(removedRouteid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedRouteid = await Routeid.updateOne(
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
    res.json(updatedRouteid);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;