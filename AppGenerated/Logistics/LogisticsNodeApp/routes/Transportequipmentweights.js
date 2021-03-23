const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportequipmentweight = require("../models/Transportequipmentweight");

router.get("/", verify, async (req, res) => {
  try {
    const Transportequipmentweights = await Transportequipmentweight.find();
    res.json(Transportequipmentweights);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportequipmentweight = await Transportequipmentweight.findById(req.params.id);
    res.json({
        _id: transportequipmentweight._id,
        measurementUnitCode: transportequipmentweight.measurementUnitCode,
        codeListVersion: transportequipmentweight.codeListVersion,
        createdAt: transportequipmentweight.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportequipmentweight = new Transportequipmentweight ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTransportequipmentweight = await transportequipmentweight.save();
    res.status(200).json(savedTransportequipmentweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportequipmentweight = await Transportequipmentweight.remove({ _id: req.params.id });
    res.json(removedTransportequipmentweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportequipmentweight = await Transportequipmentweight.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTransportequipmentweight);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;