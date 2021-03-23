const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Financialroutingnumbertype = require("../models/Financialroutingnumbertype");

router.get("/", verify, async (req, res) => {
  try {
    const Financialroutingnumbertypes = await Financialroutingnumbertype.find();
    res.json(Financialroutingnumbertypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const financialroutingnumbertype = await Financialroutingnumbertype.findById(req.params.id);
    res.json({
        _id: financialroutingnumbertype._id,
        id: financialroutingnumbertype.id,
        financialRoutingNumber: financialroutingnumbertype.financialRoutingNumber,
        financialRoutingNumberTypeCode: financialroutingnumbertype.financialRoutingNumberTypeCode,
        financialRoutingNumberTypeCodeId: financialroutingnumbertype.financialRoutingNumberTypeCode.Id,
        createdAt: financialroutingnumbertype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const financialroutingnumbertypecodes = await Enumerationlibrary.findById(req.body.financialRoutingNumberTypeCodeId);
    const financialroutingnumbertype = new Financialroutingnumbertype ({
        id: req.body.id,
        financialRoutingNumber: req.body.financialRoutingNumber,
        financialRoutingNumberTypeCode: req.body.financialRoutingNumberTypeCode,
        financialRoutingNumberTypeCode: [{
          Id: financialroutingnumbertypecodes._id,
          Name: financialroutingnumbertypecodes.id
        }],
    });
    const savedFinancialroutingnumbertype = await financialroutingnumbertype.save();
    res.status(200).json(savedFinancialroutingnumbertype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedFinancialroutingnumbertype = await Financialroutingnumbertype.remove({ _id: req.params.id });
    res.json(removedFinancialroutingnumbertype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const financialroutingnumbertypecode = await Enumerationlibrary.findById(req.body.financialRoutingNumberTypeCodeId);
    const updatedFinancialroutingnumbertype = await Financialroutingnumbertype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             financialRoutingNumber: req.body.financialRoutingNumber,
             financialRoutingNumberTypeCode: req.body.financialRoutingNumberTypeCode,
             financialRoutingNumberTypeCode: {
              Id: req.body.financialroutingnumbertypecode.id,
              Name: req.body.financialroutingnumbertypecode.id
             },

        }
      }
    );
    res.json(updatedFinancialroutingnumbertype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;