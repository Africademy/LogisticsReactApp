const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Additionalconsignmentidentificationtype = require("../models/Additionalconsignmentidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Additionalconsignmentidentificationtypes = await Additionalconsignmentidentificationtype.find();
    res.json(Additionalconsignmentidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const additionalconsignmentidentificationtype = await Additionalconsignmentidentificationtype.findById(req.params.id);
    res.json({
        _id: additionalconsignmentidentificationtype._id,
        id: additionalconsignmentidentificationtype.id,
        String80Type: additionalconsignmentidentificationtype.String80Type,
        additionalConsignmentIdentificationTypeCode: additionalconsignmentidentificationtype.additionalConsignmentIdentificationTypeCode,
        codeListVersion: additionalconsignmentidentificationtype.codeListVersion,
        createdAt: additionalconsignmentidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalconsignmentidentificationtype = new Additionalconsignmentidentificationtype ({
        id: req.body.id,
        String80Type: req.body.String80Type,
        additionalConsignmentIdentificationTypeCode: req.body.additionalConsignmentIdentificationTypeCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAdditionalconsignmentidentificationtype = await additionalconsignmentidentificationtype.save();
    res.status(200).json(savedAdditionalconsignmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAdditionalconsignmentidentificationtype = await Additionalconsignmentidentificationtype.remove({ _id: req.params.id });
    res.json(removedAdditionalconsignmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAdditionalconsignmentidentificationtype = await Additionalconsignmentidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             String80Type: req.body.String80Type,
             additionalConsignmentIdentificationTypeCode: req.body.additionalConsignmentIdentificationTypeCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAdditionalconsignmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;