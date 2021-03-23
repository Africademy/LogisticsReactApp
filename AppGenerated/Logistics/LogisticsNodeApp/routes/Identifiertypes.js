const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Identifiertype = require("../models/Identifiertype");

router.get("/", verify, async (req, res) => {
  try {
    const Identifiertypes = await Identifiertype.find();
    res.json(Identifiertypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const identifiertype = await Identifiertype.findById(req.params.id);
    res.json({
        _id: identifiertype._id,
        id: identifiertype.id,
        identificationSchemeAgencyCode: identifiertype.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: identifiertype.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: identifiertype.identificationSchemeAgencyName,
        identificationSchemeName: identifiertype.identificationSchemeName,
        createdAt: identifiertype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const identifiertype = new Identifiertype ({
        id: req.body.id,
        identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
        identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
        identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
        identificationSchemeName: req.body.identificationSchemeName,
    });
    const savedIdentifiertype = await identifiertype.save();
    res.status(200).json(savedIdentifiertype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIdentifiertype = await Identifiertype.remove({ _id: req.params.id });
    res.json(removedIdentifiertype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedIdentifiertype = await Identifiertype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             identificationSchemeAgencyCode: req.body.identificationSchemeAgencyCode,
             identificationSchemeAgencyCodeCodeListVersion: req.body.identificationSchemeAgencyCodeCodeListVersion,
             identificationSchemeAgencyName: req.body.identificationSchemeAgencyName,
             identificationSchemeName: req.body.identificationSchemeName,

        }
      }
    );
    res.json(updatedIdentifiertype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;