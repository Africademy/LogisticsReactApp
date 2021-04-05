const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Description500type = require("../models/Description500type");

router.get("/", verify, async (req, res) => {
  try {
    const Description500types = await Description500type.find();
    res.json(Description500types);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const description500type = await Description500type.findById(req.params.id);
    res.json({
        _id: description500type._id,
        id: description500type.id,
        String500Type: description500type.String500Type,
        languageCode: description500type.languageCode,
        codeListVersion: description500type.codeListVersion,
        createdAt: description500type.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const description500type = new Description500type ({
        id: req.body.id,
        String500Type: req.body.String500Type,
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDescription500type = await description500type.save();
    res.status(200).json(savedDescription500type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDescription500type = await Description500type.remove({ _id: req.params.id });
    res.json(removedDescription500type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDescription500type = await Description500type.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             String500Type: req.body.String500Type,
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDescription500type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;