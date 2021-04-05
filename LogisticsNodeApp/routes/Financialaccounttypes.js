const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Financialaccounttype = require("../models/Financialaccounttype");

router.get("/", verify, async (req, res) => {
  try {
    const Financialaccounttypes = await Financialaccounttype.find();
    res.json(Financialaccounttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const financialaccounttype = await Financialaccounttype.findById(req.params.id);
    res.json({
        _id: financialaccounttype._id,
        id: financialaccounttype.id,
        financialAccountNumber: financialaccounttype.financialAccountNumber,
        financialAccountNumberTypeCode: financialaccounttype.financialAccountNumberTypeCode,
        financialAccountName: financialaccounttype.financialAccountName,
        financialAccountNumberTypeCodeId: financialaccounttype.financialAccountNumberTypeCode.Id,
        createdAt: financialaccounttype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const financialaccountnumbertypecodes = await Enumerationlibrary.findById(req.body.financialAccountNumberTypeCodeId);
    const financialaccounttype = new Financialaccounttype ({
        id: req.body.id,
        financialAccountNumber: req.body.financialAccountNumber,
        financialAccountNumberTypeCode: req.body.financialAccountNumberTypeCode,
        financialAccountName: req.body.financialAccountName,
        financialAccountNumberTypeCode: [{
          Id: financialaccountnumbertypecodes._id,
          Name: financialaccountnumbertypecodes.id
        }],
    });
    const savedFinancialaccounttype = await financialaccounttype.save();
    res.status(200).json(savedFinancialaccounttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedFinancialaccounttype = await Financialaccounttype.remove({ _id: req.params.id });
    res.json(removedFinancialaccounttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const financialaccountnumbertypecode = await Enumerationlibrary.findById(req.body.financialAccountNumberTypeCodeId);
    const updatedFinancialaccounttype = await Financialaccounttype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             financialAccountNumber: req.body.financialAccountNumber,
             financialAccountNumberTypeCode: req.body.financialAccountNumberTypeCode,
             financialAccountName: req.body.financialAccountName,
             financialAccountNumberTypeCode: {
              Id: req.body.financialaccountnumbertypecode.id,
              Name: req.body.financialaccountnumbertypecode.id
             },

        }
      }
    );
    res.json(updatedFinancialaccounttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;