const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Legalregistrationtype = require("../models/Legalregistrationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Legalregistrationtypes = await Legalregistrationtype.find();
    res.json(Legalregistrationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const legalregistrationtype = await Legalregistrationtype.findById(req.params.id);
    res.json({
        _id: legalregistrationtype._id,
        codeListVersion: legalregistrationtype.codeListVersion,
        createdAt: legalregistrationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const legalregistrationtype = new Legalregistrationtype ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedLegalregistrationtype = await legalregistrationtype.save();
    res.status(200).json(savedLegalregistrationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLegalregistrationtype = await Legalregistrationtype.remove({ _id: req.params.id });
    res.json(removedLegalregistrationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLegalregistrationtype = await Legalregistrationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedLegalregistrationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;