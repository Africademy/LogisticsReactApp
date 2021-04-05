const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Currencyofpartycode = require("../models/Currencyofpartycode");

router.get("/", verify, async (req, res) => {
  try {
    const Currencyofpartycodes = await Currencyofpartycode.find();
    res.json(Currencyofpartycodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const currencyofpartycode = await Currencyofpartycode.findById(req.params.id);
    res.json({
        _id: currencyofpartycode._id,
        codeListVersion: currencyofpartycode.codeListVersion,
        createdAt: currencyofpartycode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const currencyofpartycode = new Currencyofpartycode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedCurrencyofpartycode = await currencyofpartycode.save();
    res.status(200).json(savedCurrencyofpartycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCurrencyofpartycode = await Currencyofpartycode.remove({ _id: req.params.id });
    res.json(removedCurrencyofpartycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCurrencyofpartycode = await Currencyofpartycode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedCurrencyofpartycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;