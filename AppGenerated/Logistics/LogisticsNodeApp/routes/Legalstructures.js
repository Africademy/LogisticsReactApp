const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Legalstructure = require("../models/Legalstructure");

router.get("/", verify, async (req, res) => {
  try {
    const Legalstructures = await Legalstructure.find();
    res.json(Legalstructures);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const legalstructure = await Legalstructure.findById(req.params.id);
    res.json({
        _id: legalstructure._id,
        languageCode: legalstructure.languageCode,
        codeListVersion: legalstructure.codeListVersion,
        createdAt: legalstructure.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const legalstructure = new Legalstructure ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedLegalstructure = await legalstructure.save();
    res.status(200).json(savedLegalstructure);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLegalstructure = await Legalstructure.remove({ _id: req.params.id });
    res.json(removedLegalstructure);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLegalstructure = await Legalstructure.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedLegalstructure);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;