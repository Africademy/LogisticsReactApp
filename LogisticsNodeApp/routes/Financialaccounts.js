const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Financialaccount = require("../models/Financialaccount");

router.get("/", verify, async (req, res) => {
  try {
    const Financialaccounts = await Financialaccount.find();
    res.json(Financialaccounts);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const financialaccount = await Financialaccount.findById(req.params.id);
    res.json({
        _id: financialaccount._id,
        financialAccountNumber: financialaccount.financialAccountNumber,
        financialAccountName: financialaccount.financialAccountName,
        createdAt: financialaccount.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const financialaccount = new Financialaccount ({
        financialAccountNumber: req.body.financialAccountNumber,
        financialAccountName: req.body.financialAccountName,
    });
    const savedFinancialaccount = await financialaccount.save();
    res.status(200).json(savedFinancialaccount);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedFinancialaccount = await Financialaccount.remove({ _id: req.params.id });
    res.json(removedFinancialaccount);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedFinancialaccount = await Financialaccount.updateOne(
      { _id: req.params.id },
      {
        $set:{
             financialAccountNumber: req.body.financialAccountNumber,
             financialAccountName: req.body.financialAccountName,

        }
      }
    );
    res.json(updatedFinancialaccount);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;