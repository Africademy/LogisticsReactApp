const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Harmonizedsystemcode = require("../models/Harmonizedsystemcode");

router.get("/", verify, async (req, res) => {
  try {
    const Harmonizedsystemcodes = await Harmonizedsystemcode.find();
    res.json(Harmonizedsystemcodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const harmonizedsystemcode = await Harmonizedsystemcode.findById(req.params.id);
    res.json({
        _id: harmonizedsystemcode._id,
        codeListVersion: harmonizedsystemcode.codeListVersion,
        createdAt: harmonizedsystemcode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const harmonizedsystemcode = new Harmonizedsystemcode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedHarmonizedsystemcode = await harmonizedsystemcode.save();
    res.status(200).json(savedHarmonizedsystemcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedHarmonizedsystemcode = await Harmonizedsystemcode.remove({ _id: req.params.id });
    res.json(removedHarmonizedsystemcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedHarmonizedsystemcode = await Harmonizedsystemcode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedHarmonizedsystemcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;