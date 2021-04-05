const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Financialroutingnumbertypecode = require("../models/Financialroutingnumbertypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Financialroutingnumbertypecodes = await Financialroutingnumbertypecode.find();
    res.json(Financialroutingnumbertypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const financialroutingnumbertypecode = await Financialroutingnumbertypecode.findById(req.params.id);
    res.json({
        _id: financialroutingnumbertypecode._id,
        codeListVersion: financialroutingnumbertypecode.codeListVersion,
        createdAt: financialroutingnumbertypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const financialroutingnumbertypecode = new Financialroutingnumbertypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedFinancialroutingnumbertypecode = await financialroutingnumbertypecode.save();
    res.status(200).json(savedFinancialroutingnumbertypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedFinancialroutingnumbertypecode = await Financialroutingnumbertypecode.remove({ _id: req.params.id });
    res.json(removedFinancialroutingnumbertypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedFinancialroutingnumbertypecode = await Financialroutingnumbertypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedFinancialroutingnumbertypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;