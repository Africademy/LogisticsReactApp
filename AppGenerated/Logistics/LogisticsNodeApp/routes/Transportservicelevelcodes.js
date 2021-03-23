const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportservicelevelcode = require("../models/Transportservicelevelcode");

router.get("/", verify, async (req, res) => {
  try {
    const Transportservicelevelcodes = await Transportservicelevelcode.find();
    res.json(Transportservicelevelcodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportservicelevelcode = await Transportservicelevelcode.findById(req.params.id);
    res.json({
        _id: transportservicelevelcode._id,
        codeListVersion: transportservicelevelcode.codeListVersion,
        createdAt: transportservicelevelcode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportservicelevelcode = new Transportservicelevelcode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedTransportservicelevelcode = await transportservicelevelcode.save();
    res.status(200).json(savedTransportservicelevelcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportservicelevelcode = await Transportservicelevelcode.remove({ _id: req.params.id });
    res.json(removedTransportservicelevelcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportservicelevelcode = await Transportservicelevelcode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTransportservicelevelcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;