const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Countryoforigincode = require("../models/Countryoforigincode");

router.get("/", verify, async (req, res) => {
  try {
    const Countryoforigincodes = await Countryoforigincode.find();
    res.json(Countryoforigincodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const countryoforigincode = await Countryoforigincode.findById(req.params.id);
    res.json({
        _id: countryoforigincode._id,
        codeListVersion: countryoforigincode.codeListVersion,
        createdAt: countryoforigincode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const countryoforigincode = new Countryoforigincode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedCountryoforigincode = await countryoforigincode.save();
    res.status(200).json(savedCountryoforigincode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCountryoforigincode = await Countryoforigincode.remove({ _id: req.params.id });
    res.json(removedCountryoforigincode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCountryoforigincode = await Countryoforigincode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedCountryoforigincode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;