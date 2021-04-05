const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Passengertariffgroup = require("../models/Passengertariffgroup");

router.get("/", verify, async (req, res) => {
  try {
    const Passengertariffgroups = await Passengertariffgroup.find();
    res.json(Passengertariffgroups);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const passengertariffgroup = await Passengertariffgroup.findById(req.params.id);
    res.json({
        _id: passengertariffgroup._id,
        languageCode: passengertariffgroup.languageCode,
        codeListVersion: passengertariffgroup.codeListVersion,
        createdAt: passengertariffgroup.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const passengertariffgroup = new Passengertariffgroup ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedPassengertariffgroup = await passengertariffgroup.save();
    res.status(200).json(savedPassengertariffgroup);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPassengertariffgroup = await Passengertariffgroup.remove({ _id: req.params.id });
    res.json(removedPassengertariffgroup);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedPassengertariffgroup = await Passengertariffgroup.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedPassengertariffgroup);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;