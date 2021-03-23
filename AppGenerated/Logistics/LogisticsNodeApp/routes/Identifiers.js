const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Identifier = require("../models/Identifier");

router.get("/", verify, async (req, res) => {
  try {
    const Identifiers = await Identifier.find();
    res.json(Identifiers);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const identifier = await Identifier.findById(req.params.id);
    res.json({
        _id: identifier._id,
        Authority: identifier.Authority,
        createdAt: identifier.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const identifier = new Identifier ({
        Authority: req.body.Authority,
    });
    const savedIdentifier = await identifier.save();
    res.status(200).json(savedIdentifier);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIdentifier = await Identifier.remove({ _id: req.params.id });
    res.json(removedIdentifier);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedIdentifier = await Identifier.updateOne(
      { _id: req.params.id },
      {
        $set:{
             Authority: req.body.Authority,

        }
      }
    );
    res.json(updatedIdentifier);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;