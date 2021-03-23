const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Unlocationcode = require("../models/Unlocationcode");

router.get("/", verify, async (req, res) => {
  try {
    const Unlocationcodes = await Unlocationcode.find();
    res.json(Unlocationcodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const unlocationcode = await Unlocationcode.findById(req.params.id);
    res.json({
        _id: unlocationcode._id,
        codeListVersion: unlocationcode.codeListVersion,
        createdAt: unlocationcode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const unlocationcode = new Unlocationcode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedUnlocationcode = await unlocationcode.save();
    res.status(200).json(savedUnlocationcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedUnlocationcode = await Unlocationcode.remove({ _id: req.params.id });
    res.json(removedUnlocationcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedUnlocationcode = await Unlocationcode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedUnlocationcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;