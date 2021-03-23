const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Description70type = require("../models/Description70type");

router.get("/", verify, async (req, res) => {
  try {
    const Description70types = await Description70type.find();
    res.json(Description70types);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const description70type = await Description70type.findById(req.params.id);
    res.json({
        _id: description70type._id,
        id: description70type.id,
        languageCode: description70type.languageCode,
        codeListVersion: description70type.codeListVersion,
        createdAt: description70type.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const description70type = new Description70type ({
        id: req.body.id,
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDescription70type = await description70type.save();
    res.status(200).json(savedDescription70type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDescription70type = await Description70type.remove({ _id: req.params.id });
    res.json(removedDescription70type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDescription70type = await Description70type.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDescription70type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;