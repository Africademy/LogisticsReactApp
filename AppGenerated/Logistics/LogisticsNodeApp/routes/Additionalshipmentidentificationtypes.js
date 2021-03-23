const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Additionalshipmentidentificationtype = require("../models/Additionalshipmentidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Additionalshipmentidentificationtypes = await Additionalshipmentidentificationtype.find();
    res.json(Additionalshipmentidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const additionalshipmentidentificationtype = await Additionalshipmentidentificationtype.findById(req.params.id);
    res.json({
        _id: additionalshipmentidentificationtype._id,
        id: additionalshipmentidentificationtype.id,
        String80Type: additionalshipmentidentificationtype.String80Type,
        additionalShipmentIdentificationTypeCode: additionalshipmentidentificationtype.additionalShipmentIdentificationTypeCode,
        codeListVersion: additionalshipmentidentificationtype.codeListVersion,
        createdAt: additionalshipmentidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalshipmentidentificationtype = new Additionalshipmentidentificationtype ({
        id: req.body.id,
        String80Type: req.body.String80Type,
        additionalShipmentIdentificationTypeCode: req.body.additionalShipmentIdentificationTypeCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAdditionalshipmentidentificationtype = await additionalshipmentidentificationtype.save();
    res.status(200).json(savedAdditionalshipmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAdditionalshipmentidentificationtype = await Additionalshipmentidentificationtype.remove({ _id: req.params.id });
    res.json(removedAdditionalshipmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAdditionalshipmentidentificationtype = await Additionalshipmentidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             String80Type: req.body.String80Type,
             additionalShipmentIdentificationTypeCode: req.body.additionalShipmentIdentificationTypeCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAdditionalshipmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;