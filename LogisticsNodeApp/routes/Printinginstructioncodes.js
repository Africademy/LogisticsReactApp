const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Printinginstructioncode = require("../models/Printinginstructioncode");

router.get("/", verify, async (req, res) => {
  try {
    const Printinginstructioncodes = await Printinginstructioncode.find();
    res.json(Printinginstructioncodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const printinginstructioncode = await Printinginstructioncode.findById(req.params.id);
    res.json({
        _id: printinginstructioncode._id,
        codeListVersion: printinginstructioncode.codeListVersion,
        createdAt: printinginstructioncode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const printinginstructioncode = new Printinginstructioncode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedPrintinginstructioncode = await printinginstructioncode.save();
    res.status(200).json(savedPrintinginstructioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPrintinginstructioncode = await Printinginstructioncode.remove({ _id: req.params.id });
    res.json(removedPrintinginstructioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedPrintinginstructioncode = await Printinginstructioncode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedPrintinginstructioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;