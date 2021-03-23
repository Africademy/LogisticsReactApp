const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dropoffparty = require("../models/Dropoffparty");

router.get("/", verify, async (req, res) => {
  try {
    const Dropoffpartys = await Dropoffparty.find();
    res.json(Dropoffpartys);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dropoffparty = await Dropoffparty.findById(req.params.id);
    res.json({
        _id: dropoffparty._id,
        gln: dropoffparty.gln,
        createdAt: dropoffparty.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dropoffparty = new Dropoffparty ({
        gln: req.body.gln,
    });
    const savedDropoffparty = await dropoffparty.save();
    res.status(200).json(savedDropoffparty);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDropoffparty = await Dropoffparty.remove({ _id: req.params.id });
    res.json(removedDropoffparty);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDropoffparty = await Dropoffparty.updateOne(
      { _id: req.params.id },
      {
        $set:{
             gln: req.body.gln,

        }
      }
    );
    res.json(updatedDropoffparty);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;