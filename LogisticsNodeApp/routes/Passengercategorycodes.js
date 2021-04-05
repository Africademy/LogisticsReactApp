const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Passengercategorycode = require("../models/Passengercategorycode");

router.get("/", verify, async (req, res) => {
  try {
    const Passengercategorycodes = await Passengercategorycode.find();
    res.json(Passengercategorycodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const passengercategorycode = await Passengercategorycode.findById(req.params.id);
    res.json({
        _id: passengercategorycode._id,
        codeListVersion: passengercategorycode.codeListVersion,
        createdAt: passengercategorycode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const passengercategorycode = new Passengercategorycode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedPassengercategorycode = await passengercategorycode.save();
    res.status(200).json(savedPassengercategorycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPassengercategorycode = await Passengercategorycode.remove({ _id: req.params.id });
    res.json(removedPassengercategorycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedPassengercategorycode = await Passengercategorycode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedPassengercategorycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;