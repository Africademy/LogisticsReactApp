const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportservicecategorycode = require("../models/Transportservicecategorycode");

router.get("/", verify, async (req, res) => {
  try {
    const Transportservicecategorycodes = await Transportservicecategorycode.find();
    res.json(Transportservicecategorycodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportservicecategorycode = await Transportservicecategorycode.findById(req.params.id);
    res.json({
        _id: transportservicecategorycode._id,
        codeListVersion: transportservicecategorycode.codeListVersion,
        createdAt: transportservicecategorycode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportservicecategorycode = new Transportservicecategorycode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedTransportservicecategorycode = await transportservicecategorycode.save();
    res.status(200).json(savedTransportservicecategorycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportservicecategorycode = await Transportservicecategorycode.remove({ _id: req.params.id });
    res.json(removedTransportservicecategorycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportservicecategorycode = await Transportservicecategorycode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTransportservicecategorycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;