const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Correlationinformation = require("../models/Correlationinformation");

router.get("/", verify, async (req, res) => {
  try {
    const Correlationinformations = await Correlationinformation.find();
    res.json(Correlationinformations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const correlationinformation = await Correlationinformation.findById(req.params.id);
    res.json({
        _id: correlationinformation._id,
        RequestingDocumentCreationDateTime: correlationinformation.RequestingDocumentCreationDateTime,
        RequestingDocumentInstanceIdentifier: correlationinformation.RequestingDocumentInstanceIdentifier,
        ExpectedResponseDateTime: correlationinformation.ExpectedResponseDateTime,
        createdAt: correlationinformation.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const correlationinformation = new Correlationinformation ({
        RequestingDocumentCreationDateTime: req.body.RequestingDocumentCreationDateTime,
        RequestingDocumentInstanceIdentifier: req.body.RequestingDocumentInstanceIdentifier,
        ExpectedResponseDateTime: req.body.ExpectedResponseDateTime,
    });
    const savedCorrelationinformation = await correlationinformation.save();
    res.status(200).json(savedCorrelationinformation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCorrelationinformation = await Correlationinformation.remove({ _id: req.params.id });
    res.json(removedCorrelationinformation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCorrelationinformation = await Correlationinformation.updateOne(
      { _id: req.params.id },
      {
        $set:{
             RequestingDocumentCreationDateTime: req.body.RequestingDocumentCreationDateTime,
             RequestingDocumentInstanceIdentifier: req.body.RequestingDocumentInstanceIdentifier,
             ExpectedResponseDateTime: req.body.ExpectedResponseDateTime,

        }
      }
    );
    res.json(updatedCorrelationinformation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;