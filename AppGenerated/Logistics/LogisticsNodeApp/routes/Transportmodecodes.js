const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportmodecode = require("../models/Transportmodecode");

router.get("/", verify, async (req, res) => {
  try {
    const Transportmodecodes = await Transportmodecode.find();
    res.json(Transportmodecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportmodecode = await Transportmodecode.findById(req.params.id);
    res.json({
        _id: transportmodecode._id,
        codeListVersion: transportmodecode.codeListVersion,
        createdAt: transportmodecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportmodecode = new Transportmodecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedTransportmodecode = await transportmodecode.save();
    res.status(200).json(savedTransportmodecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportmodecode = await Transportmodecode.remove({ _id: req.params.id });
    res.json(removedTransportmodecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportmodecode = await Transportmodecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTransportmodecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;