const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportequipmenttypecode = require("../models/Transportequipmenttypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Transportequipmenttypecodes = await Transportequipmenttypecode.find();
    res.json(Transportequipmenttypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportequipmenttypecode = await Transportequipmenttypecode.findById(req.params.id);
    res.json({
        _id: transportequipmenttypecode._id,
        codeDescription: transportequipmenttypecode.codeDescription,
        codeListAgencyCode: transportequipmenttypecode.codeListAgencyCode,
        codeListAgencyCodeListVersion: transportequipmenttypecode.codeListAgencyCodeListVersion,
        codeListAgencyName: transportequipmenttypecode.codeListAgencyName,
        codeListName: transportequipmenttypecode.codeListName,
        codeListURI: transportequipmenttypecode.codeListURI,
        codeListVersion: transportequipmenttypecode.codeListVersion,
        createdAt: transportequipmenttypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportequipmenttypecode = new Transportequipmenttypecode ({
        codeDescription: req.body.codeDescription,
        codeListAgencyCode: req.body.codeListAgencyCode,
        codeListAgencyCodeListVersion: req.body.codeListAgencyCodeListVersion,
        codeListAgencyName: req.body.codeListAgencyName,
        codeListName: req.body.codeListName,
        codeListURI: req.body.codeListURI,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTransportequipmenttypecode = await transportequipmenttypecode.save();
    res.status(200).json(savedTransportequipmenttypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportequipmenttypecode = await Transportequipmenttypecode.remove({ _id: req.params.id });
    res.json(removedTransportequipmenttypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportequipmenttypecode = await Transportequipmenttypecode.updateOne(
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
    res.json(updatedTransportequipmenttypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;