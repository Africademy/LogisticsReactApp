const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Additionalpartyidentificationtype = require("../models/Additionalpartyidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Additionalpartyidentificationtypes = await Additionalpartyidentificationtype.find();
    res.json(Additionalpartyidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const additionalpartyidentificationtype = await Additionalpartyidentificationtype.findById(req.params.id);
    res.json({
        _id: additionalpartyidentificationtype._id,
        id: additionalpartyidentificationtype.id,
        additionalPartyIdentificationTypeCode: additionalpartyidentificationtype.additionalPartyIdentificationTypeCode,
        codeListVersion: additionalpartyidentificationtype.codeListVersion,
        createdAt: additionalpartyidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalpartyidentificationtype = new Additionalpartyidentificationtype ({
        id: req.body.id,
        additionalPartyIdentificationTypeCode: req.body.additionalPartyIdentificationTypeCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAdditionalpartyidentificationtype = await additionalpartyidentificationtype.save();
    res.status(200).json(savedAdditionalpartyidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAdditionalpartyidentificationtype = await Additionalpartyidentificationtype.remove({ _id: req.params.id });
    res.json(removedAdditionalpartyidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAdditionalpartyidentificationtype = await Additionalpartyidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             additionalPartyIdentificationTypeCode: req.body.additionalPartyIdentificationTypeCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAdditionalpartyidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;