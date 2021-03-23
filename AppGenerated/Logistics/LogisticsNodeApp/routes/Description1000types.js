const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Description1000type = require("../models/Description1000type");

router.get("/", verify, async (req, res) => {
  try {
    const Description1000types = await Description1000type.find();
    res.json(Description1000types);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const description1000type = await Description1000type.findById(req.params.id);
    res.json({
        _id: description1000type._id,
        id: description1000type.id,
        String1000Type: description1000type.String1000Type,
        languageCode: description1000type.languageCode,
        codeListVersion: description1000type.codeListVersion,
        createdAt: description1000type.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const description1000type = new Description1000type ({
        id: req.body.id,
        String1000Type: req.body.String1000Type,
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDescription1000type = await description1000type.save();
    res.status(200).json(savedDescription1000type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDescription1000type = await Description1000type.remove({ _id: req.params.id });
    res.json(removedDescription1000type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDescription1000type = await Description1000type.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             String1000Type: req.body.String1000Type,
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDescription1000type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;