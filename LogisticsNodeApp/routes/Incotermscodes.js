const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Incotermscode = require("../models/Incotermscode");

router.get("/", verify, async (req, res) => {
  try {
    const Incotermscodes = await Incotermscode.find();
    res.json(Incotermscodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const incotermscode = await Incotermscode.findById(req.params.id);
    res.json({
        _id: incotermscode._id,
        codeListVersion: incotermscode.codeListVersion,
        createdAt: incotermscode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const incotermscode = new Incotermscode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedIncotermscode = await incotermscode.save();
    res.status(200).json(savedIncotermscode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIncotermscode = await Incotermscode.remove({ _id: req.params.id });
    res.json(removedIncotermscode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedIncotermscode = await Incotermscode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedIncotermscode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;