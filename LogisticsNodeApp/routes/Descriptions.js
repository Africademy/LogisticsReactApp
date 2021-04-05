const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Description = require("../models/Description");

router.get("/", verify, async (req, res) => {
  try {
    const Descriptions = await Description.find();
    res.json(Descriptions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const description = await Description.findById(req.params.id);
    res.json({
        _id: description._id,
        languageCode: description.languageCode,
        codeListVersion: description.codeListVersion,
        createdAt: description.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const description = new Description ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDescription = await description.save();
    res.status(200).json(savedDescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDescription = await Description.remove({ _id: req.params.id });
    res.json(removedDescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDescription = await Description.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;