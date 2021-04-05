const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Documentidentification = require("../models/Documentidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Documentidentifications = await Documentidentification.find();
    res.json(Documentidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const documentidentification = await Documentidentification.findById(req.params.id);
    res.json({
        _id: documentidentification._id,
        Standard: documentidentification.Standard,
        TypeVersion: documentidentification.TypeVersion,
        InstanceIdentifier: documentidentification.InstanceIdentifier,
        Type: documentidentification.Type,
        MultipleType: documentidentification.MultipleType,
        CreationDateAndTime: documentidentification.CreationDateAndTime,
        createdAt: documentidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const documentidentification = new Documentidentification ({
        Standard: req.body.Standard,
        TypeVersion: req.body.TypeVersion,
        InstanceIdentifier: req.body.InstanceIdentifier,
        Type: req.body.Type,
        MultipleType: req.body.MultipleType,
        CreationDateAndTime: req.body.CreationDateAndTime,
    });
    const savedDocumentidentification = await documentidentification.save();
    res.status(200).json(savedDocumentidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDocumentidentification = await Documentidentification.remove({ _id: req.params.id });
    res.json(removedDocumentidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDocumentidentification = await Documentidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             Standard: req.body.Standard,
             TypeVersion: req.body.TypeVersion,
             InstanceIdentifier: req.body.InstanceIdentifier,
             Type: req.body.Type,
             MultipleType: req.body.MultipleType,
             CreationDateAndTime: req.body.CreationDateAndTime,

        }
      }
    );
    res.json(updatedDocumentidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;