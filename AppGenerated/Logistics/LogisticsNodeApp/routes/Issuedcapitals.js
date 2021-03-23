const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Issuedcapital = require("../models/Issuedcapital");

router.get("/", verify, async (req, res) => {
  try {
    const Issuedcapitals = await Issuedcapital.find();
    res.json(Issuedcapitals);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const issuedcapital = await Issuedcapital.findById(req.params.id);
    res.json({
        _id: issuedcapital._id,
        currencyCode: issuedcapital.currencyCode,
        codeListVersion: issuedcapital.codeListVersion,
        createdAt: issuedcapital.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const issuedcapital = new Issuedcapital ({
        currencyCode: req.body.currencyCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedIssuedcapital = await issuedcapital.save();
    res.status(200).json(savedIssuedcapital);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIssuedcapital = await Issuedcapital.remove({ _id: req.params.id });
    res.json(removedIssuedcapital);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedIssuedcapital = await Issuedcapital.updateOne(
      { _id: req.params.id },
      {
        $set:{
             currencyCode: req.body.currencyCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedIssuedcapital);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;