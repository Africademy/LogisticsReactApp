const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Additionallocationidentification = require("../models/Additionallocationidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Additionallocationidentifications = await Additionallocationidentification.find();
    res.json(Additionallocationidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const additionallocationidentification = await Additionallocationidentification.findById(req.params.id);
    res.json({
        _id: additionallocationidentification._id,
        identificationSchemeAgencyCode: additionallocationidentification.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: additionallocationidentification.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: additionallocationidentification.identificationSchemeAgencyName,
        identificationSchemeName: additionallocationidentification.identificationSchemeName,
        createdAt: additionallocationidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionallocationidentification = new Additionallocationidentification ({
        identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
        identificationSchemeName: req.body.identificationSchemeName,
    });
    const savedAdditionallocationidentification = await additionallocationidentification.save();
    res.status(200).json(savedAdditionallocationidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAdditionallocationidentification = await Additionallocationidentification.remove({ _id: req.params.id });
    res.json(removedAdditionallocationidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAdditionallocationidentification = await Additionallocationidentification.updateOne(
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
    res.json(updatedAdditionallocationidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;