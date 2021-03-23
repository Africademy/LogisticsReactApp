const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Financialaccountnumbertypecode = require("../models/Financialaccountnumbertypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Financialaccountnumbertypecodes = await Financialaccountnumbertypecode.find();
    res.json(Financialaccountnumbertypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const financialaccountnumbertypecode = await Financialaccountnumbertypecode.findById(req.params.id);
    res.json({
        _id: financialaccountnumbertypecode._id,
        codeListVersion: financialaccountnumbertypecode.codeListVersion,
        createdAt: financialaccountnumbertypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const financialaccountnumbertypecode = new Financialaccountnumbertypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedFinancialaccountnumbertypecode = await financialaccountnumbertypecode.save();
    res.status(200).json(savedFinancialaccountnumbertypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedFinancialaccountnumbertypecode = await Financialaccountnumbertypecode.remove({ _id: req.params.id });
    res.json(removedFinancialaccountnumbertypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedFinancialaccountnumbertypecode = await Financialaccountnumbertypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedFinancialaccountnumbertypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;