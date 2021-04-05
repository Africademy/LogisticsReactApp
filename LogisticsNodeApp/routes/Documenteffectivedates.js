const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Documenteffectivedate = require("../models/Documenteffectivedate");

router.get("/", verify, async (req, res) => {
  try {
    const Documenteffectivedates = await Documenteffectivedate.find();
    res.json(Documenteffectivedates);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const documenteffectivedate = await Documenteffectivedate.findById(req.params.id);
    res.json({
        _id: documenteffectivedate._id,
        date: documenteffectivedate.date,
        time: documenteffectivedate.time,
        createdAt: documenteffectivedate.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const documenteffectivedate = new Documenteffectivedate ({
        date: req.body.date,
        time: req.body.time,
    });
    const savedDocumenteffectivedate = await documenteffectivedate.save();
    res.status(200).json(savedDocumenteffectivedate);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDocumenteffectivedate = await Documenteffectivedate.remove({ _id: req.params.id });
    res.json(removedDocumenteffectivedate);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDocumenteffectivedate = await Documenteffectivedate.updateOne(
      { _id: req.params.id },
      {
        $set:{
             date: req.body.date,
             time: req.body.time,

        }
      }
    );
    res.json(updatedDocumenteffectivedate);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;