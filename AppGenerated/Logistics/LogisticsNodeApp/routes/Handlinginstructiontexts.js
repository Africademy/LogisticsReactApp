const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Handlinginstructiontext = require("../models/Handlinginstructiontext");

router.get("/", verify, async (req, res) => {
  try {
    const Handlinginstructiontexts = await Handlinginstructiontext.find();
    res.json(Handlinginstructiontexts);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const handlinginstructiontext = await Handlinginstructiontext.findById(req.params.id);
    res.json({
        _id: handlinginstructiontext._id,
        languageCode: handlinginstructiontext.languageCode,
        codeListVersion: handlinginstructiontext.codeListVersion,
        createdAt: handlinginstructiontext.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const handlinginstructiontext = new Handlinginstructiontext ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedHandlinginstructiontext = await handlinginstructiontext.save();
    res.status(200).json(savedHandlinginstructiontext);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedHandlinginstructiontext = await Handlinginstructiontext.remove({ _id: req.params.id });
    res.json(removedHandlinginstructiontext);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedHandlinginstructiontext = await Handlinginstructiontext.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedHandlinginstructiontext);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;