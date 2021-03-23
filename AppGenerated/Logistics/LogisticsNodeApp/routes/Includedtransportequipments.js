const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Includedtransportequipment = require("../models/Includedtransportequipment");

router.get("/", verify, async (req, res) => {
  try {
    const Includedtransportequipments = await Includedtransportequipment.find();
    res.json(Includedtransportequipments);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const includedtransportequipment = await Includedtransportequipment.findById(req.params.id);
    res.json({
        _id: includedtransportequipment._id,
        numberOfPiecesOfEquipment: includedtransportequipment.numberOfPiecesOfEquipment,
        createdAt: includedtransportequipment.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const includedtransportequipment = new Includedtransportequipment ({
        numberOfPiecesOfEquipment: req.body.numberOfPiecesOfEquipment,
    });
    const savedIncludedtransportequipment = await includedtransportequipment.save();
    res.status(200).json(savedIncludedtransportequipment);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIncludedtransportequipment = await Includedtransportequipment.remove({ _id: req.params.id });
    res.json(removedIncludedtransportequipment);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedIncludedtransportequipment = await Includedtransportequipment.updateOne(
      { _id: req.params.id },
      {
        $set:{
             numberOfPiecesOfEquipment: req.body.numberOfPiecesOfEquipment,

        }
      }
    );
    res.json(updatedIncludedtransportequipment);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;