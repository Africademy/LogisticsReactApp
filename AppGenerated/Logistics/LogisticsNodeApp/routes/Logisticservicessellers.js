const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticservicesseller = require("../models/Logisticservicesseller");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticservicessellers = await Logisticservicesseller.find();
    res.json(Logisticservicessellers);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticservicesseller = await Logisticservicesseller.findById(req.params.id);
    res.json({
        _id: logisticservicesseller._id,
        gln: logisticservicesseller.gln,
        createdAt: logisticservicesseller.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const logisticservicesseller = new Logisticservicesseller ({
        gln: req.body.gln,
    });
    const savedLogisticservicesseller = await logisticservicesseller.save();
    res.status(200).json(savedLogisticservicesseller);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticservicesseller = await Logisticservicesseller.remove({ _id: req.params.id });
    res.json(removedLogisticservicesseller);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLogisticservicesseller = await Logisticservicesseller.updateOne(
      { _id: req.params.id },
      {
        $set:{
             gln: req.body.gln,

        }
      }
    );
    res.json(updatedLogisticservicesseller);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;