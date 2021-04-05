const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Documentreferencetype = require("../models/Documentreferencetype");

router.get("/", verify, async (req, res) => {
  try {
    const Documentreferencetypes = await Documentreferencetype.find();
    res.json(Documentreferencetypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const documentreferencetype = await Documentreferencetype.findById(req.params.id);
    res.json({
        _id: documentreferencetype._id,
        id: documentreferencetype.id,
        creationDateTime: documentreferencetype.creationDateTime,
        revisionNumber: documentreferencetype.revisionNumber,
        lineItemNumber: documentreferencetype.lineItemNumber,
        createdAt: documentreferencetype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const documentreferencetype = new Documentreferencetype ({
        id: req.body.id,
        creationDateTime: req.body.creationDateTime,
        revisionNumber: req.body.revisionNumber,
        lineItemNumber: req.body.lineItemNumber,
    });
    const savedDocumentreferencetype = await documentreferencetype.save();
    res.status(200).json(savedDocumentreferencetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDocumentreferencetype = await Documentreferencetype.remove({ _id: req.params.id });
    res.json(removedDocumentreferencetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDocumentreferencetype = await Documentreferencetype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             creationDateTime: req.body.creationDateTime,
             revisionNumber: req.body.revisionNumber,
             lineItemNumber: req.body.lineItemNumber,

        }
      }
    );
    res.json(updatedDocumentreferencetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;