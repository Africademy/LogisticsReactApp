const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Handlinginstructioncode = require("../models/Handlinginstructioncode");

router.get("/", verify, async (req, res) => {
  try {
    const Handlinginstructioncodes = await Handlinginstructioncode.find();
    res.json(Handlinginstructioncodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const handlinginstructioncode = await Handlinginstructioncode.findById(req.params.id);
    res.json({
        _id: handlinginstructioncode._id,
        codeListVersion: handlinginstructioncode.codeListVersion,
        createdAt: handlinginstructioncode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const handlinginstructioncode = new Handlinginstructioncode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedHandlinginstructioncode = await handlinginstructioncode.save();
    res.status(200).json(savedHandlinginstructioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedHandlinginstructioncode = await Handlinginstructioncode.remove({ _id: req.params.id });
    res.json(removedHandlinginstructioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedHandlinginstructioncode = await Handlinginstructioncode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedHandlinginstructioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;