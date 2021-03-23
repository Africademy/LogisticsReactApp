const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Description80type = require("../models/Description80type");

router.get("/", verify, async (req, res) => {
  try {
    const Description80types = await Description80type.find();
    res.json(Description80types);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const description80type = await Description80type.findById(req.params.id);
    res.json({
        _id: description80type._id,
        id: description80type.id,
        languageCode: description80type.languageCode,
        codeListVersion: description80type.codeListVersion,
        createdAt: description80type.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const description80type = new Description80type ({
        id: req.body.id,
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDescription80type = await description80type.save();
    res.status(200).json(savedDescription80type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDescription80type = await Description80type.remove({ _id: req.params.id });
    res.json(removedDescription80type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDescription80type = await Description80type.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDescription80type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;