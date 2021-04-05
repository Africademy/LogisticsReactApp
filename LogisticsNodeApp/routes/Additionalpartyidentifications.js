const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Additionalpartyidentification = require("../models/Additionalpartyidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Additionalpartyidentifications = await Additionalpartyidentification.find();
    res.json(Additionalpartyidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const additionalpartyidentification = await Additionalpartyidentification.findById(req.params.id);
    res.json({
        _id: additionalpartyidentification._id,
        additionalPartyIdentificationTypeCode: additionalpartyidentification.additionalPartyIdentificationTypeCode,
        codeListVersion: additionalpartyidentification.codeListVersion,
        createdAt: additionalpartyidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalpartyidentification = new Additionalpartyidentification ({
        additionalPartyIdentificationTypeCode: req.body.additionalPartyIdentificationTypeCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAdditionalpartyidentification = await additionalpartyidentification.save();
    res.status(200).json(savedAdditionalpartyidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAdditionalpartyidentification = await Additionalpartyidentification.remove({ _id: req.params.id });
    res.json(removedAdditionalpartyidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAdditionalpartyidentification = await Additionalpartyidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             additionalPartyIdentificationTypeCode: req.body.additionalPartyIdentificationTypeCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAdditionalpartyidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;