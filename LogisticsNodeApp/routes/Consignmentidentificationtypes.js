const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Consignmentidentificationtype = require("../models/Consignmentidentificationtype");
const Additionalconsignmentidentificationtype= require("../models/Additionalconsignmentidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Consignmentidentificationtypes = await Consignmentidentificationtype.find();
    res.json(Consignmentidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const consignmentidentificationtype = await Consignmentidentificationtype.findById(req.params.id);
    res.json({
        _id: consignmentidentificationtype._id,
        id: consignmentidentificationtype.id,
        ginc: consignmentidentificationtype.ginc,
        additionalConsignmentIdentification: consignmentidentificationtype.additionalConsignmentIdentification,
        additionalConsignmentIdentificationId: consignmentidentificationtype.additionalConsignmentIdentification.Id,
        createdAt: consignmentidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalconsignmentidentifications = await Additionalconsignmentidentificationtype.findById(req.body.additionalConsignmentIdentificationId);
    const consignmentidentificationtype = new Consignmentidentificationtype ({
        id: req.body.id,
        ginc: req.body.ginc,
        additionalConsignmentIdentification: req.body.additionalConsignmentIdentification,
        additionalConsignmentIdentification: [{
          Id: additionalconsignmentidentifications._id,
          Name: additionalconsignmentidentifications.id
        }],
    });
    const savedConsignmentidentificationtype = await consignmentidentificationtype.save();
    res.status(200).json(savedConsignmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedConsignmentidentificationtype = await Consignmentidentificationtype.remove({ _id: req.params.id });
    res.json(removedConsignmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const additionalconsignmentidentification = await Additionalconsignmentidentificationtype.findById(req.body.additionalConsignmentIdentificationId);
    const updatedConsignmentidentificationtype = await Consignmentidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             ginc: req.body.ginc,
             additionalConsignmentIdentification: req.body.additionalConsignmentIdentification,
             additionalConsignmentIdentification: {
              Id: req.body.additionalconsignmentidentification.id,
              Name: req.body.additionalconsignmentidentification.id
             },

        }
      }
    );
    res.json(updatedConsignmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;