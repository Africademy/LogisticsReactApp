const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Financialroutingnumber = require("../models/Financialroutingnumber");

router.get("/", verify, async (req, res) => {
  try {
    const Financialroutingnumbers = await Financialroutingnumber.find();
    res.json(Financialroutingnumbers);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const financialroutingnumber = await Financialroutingnumber.findById(req.params.id);
    res.json({
        _id: financialroutingnumber._id,
        financialRoutingNumber: financialroutingnumber.financialRoutingNumber,
        createdAt: financialroutingnumber.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const financialroutingnumber = new Financialroutingnumber ({
        financialRoutingNumber: req.body.financialRoutingNumber,
    });
    const savedFinancialroutingnumber = await financialroutingnumber.save();
    res.status(200).json(savedFinancialroutingnumber);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedFinancialroutingnumber = await Financialroutingnumber.remove({ _id: req.params.id });
    res.json(removedFinancialroutingnumber);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedFinancialroutingnumber = await Financialroutingnumber.updateOne(
      { _id: req.params.id },
      {
        $set:{
             financialRoutingNumber: req.body.financialRoutingNumber,

        }
      }
    );
    res.json(updatedFinancialroutingnumber);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;