const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Additionallogisticunitidentificationtype = require("../models/Additionallogisticunitidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Additionallogisticunitidentificationtypes = await Additionallogisticunitidentificationtype.find();
    res.json(Additionallogisticunitidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const additionallogisticunitidentificationtype = await Additionallogisticunitidentificationtype.findById(req.params.id);
    res.json({
        _id: additionallogisticunitidentificationtype._id,
        id: additionallogisticunitidentificationtype.id,
        String80Type: additionallogisticunitidentificationtype.String80Type,
        additionalLogisticUnitIdentificationTypeCode: additionallogisticunitidentificationtype.additionalLogisticUnitIdentificationTypeCode,
        codeListVersion: additionallogisticunitidentificationtype.codeListVersion,
        createdAt: additionallogisticunitidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionallogisticunitidentificationtype = new Additionallogisticunitidentificationtype ({
        id: req.body.id,
        String80Type: req.body.String80Type,
        additionalLogisticUnitIdentificationTypeCode: req.body.additionalLogisticUnitIdentificationTypeCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAdditionallogisticunitidentificationtype = await additionallogisticunitidentificationtype.save();
    res.status(200).json(savedAdditionallogisticunitidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAdditionallogisticunitidentificationtype = await Additionallogisticunitidentificationtype.remove({ _id: req.params.id });
    res.json(removedAdditionallogisticunitidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAdditionallogisticunitidentificationtype = await Additionallogisticunitidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             String80Type: req.body.String80Type,
             additionalLogisticUnitIdentificationTypeCode: req.body.additionalLogisticUnitIdentificationTypeCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAdditionallogisticunitidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;