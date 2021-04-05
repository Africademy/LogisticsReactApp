const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Description200type = require("../models/Description200type");

router.get("/", verify, async (req, res) => {
  try {
    const Description200types = await Description200type.find();
    res.json(Description200types);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const description200type = await Description200type.findById(req.params.id);
    res.json({
        _id: description200type._id,
        id: description200type.id,
        languageCode: description200type.languageCode,
        codeListVersion: description200type.codeListVersion,
        createdAt: description200type.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const description200type = new Description200type ({
        id: req.body.id,
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDescription200type = await description200type.save();
    res.status(200).json(savedDescription200type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDescription200type = await Description200type.remove({ _id: req.params.id });
    res.json(removedDescription200type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDescription200type = await Description200type.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDescription200type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;