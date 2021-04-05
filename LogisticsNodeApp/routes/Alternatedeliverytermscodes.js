const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Alternatedeliverytermscode = require("../models/Alternatedeliverytermscode");

router.get("/", verify, async (req, res) => {
  try {
    const Alternatedeliverytermscodes = await Alternatedeliverytermscode.find();
    res.json(Alternatedeliverytermscodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const alternatedeliverytermscode = await Alternatedeliverytermscode.findById(req.params.id);
    res.json({
        _id: alternatedeliverytermscode._id,
        codeDescription: alternatedeliverytermscode.codeDescription,
        codeListAgencyCode: alternatedeliverytermscode.codeListAgencyCode,
        codeListAgencyCodeListVersion: alternatedeliverytermscode.codeListAgencyCodeListVersion,
        codeListAgencyName: alternatedeliverytermscode.codeListAgencyName,
        codeListName: alternatedeliverytermscode.codeListName,
        codeListURI: alternatedeliverytermscode.codeListURI,
        codeListVersion: alternatedeliverytermscode.codeListVersion,
        createdAt: alternatedeliverytermscode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const alternatedeliverytermscode = new Alternatedeliverytermscode ({
        codeDescription: req.body.codeDescription,
        codeListAgencyCode: req.body.codeListAgencyCode,
        codeListAgencyCodeListVersion: req.body.codeListAgencyCodeListVersion,
        codeListAgencyName: req.body.codeListAgencyName,
        codeListName: req.body.codeListName,
        codeListURI: req.body.codeListURI,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAlternatedeliverytermscode = await alternatedeliverytermscode.save();
    res.status(200).json(savedAlternatedeliverytermscode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAlternatedeliverytermscode = await Alternatedeliverytermscode.remove({ _id: req.params.id });
    res.json(removedAlternatedeliverytermscode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAlternatedeliverytermscode = await Alternatedeliverytermscode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeDescription: req.body.codeDescription,
             codeListAgencyCode: req.body.codeListAgencyCode,
             codeListAgencyCodeListVersion: req.body.codeListAgencyCodeListVersion,
             codeListAgencyName: req.body.codeListAgencyName,
             codeListName: req.body.codeListName,
             codeListURI: req.body.codeListURI,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAlternatedeliverytermscode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;