const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Countrycode = require("../models/Countrycode");

router.get("/", verify, async (req, res) => {
  try {
    const Countrycodes = await Countrycode.find();
    res.json(Countrycodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const countrycode = await Countrycode.findById(req.params.id);
    res.json({
        _id: countrycode._id,
        codeListVersion: countrycode.codeListVersion,
        createdAt: countrycode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const countrycode = new Countrycode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedCountrycode = await countrycode.save();
    res.status(200).json(savedCountrycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCountrycode = await Countrycode.remove({ _id: req.params.id });
    res.json(removedCountrycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCountrycode = await Countrycode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedCountrycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;