const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Amounttype = require("../models/Amounttype");

router.get("/", verify, async (req, res) => {
  try {
    const Amounttypes = await Amounttype.find();
    res.json(Amounttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const amounttype = await Amounttype.findById(req.params.id);
    res.json({
        _id: amounttype._id,
        id: amounttype.id,
        currencyCode: amounttype.currencyCode,
        codeListVersion: amounttype.codeListVersion,
        createdAt: amounttype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const amounttype = new Amounttype ({
        id: req.body.id,
        currencyCode: req.body.currencyCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAmounttype = await amounttype.save();
    res.status(200).json(savedAmounttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAmounttype = await Amounttype.remove({ _id: req.params.id });
    res.json(removedAmounttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAmounttype = await Amounttype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             currencyCode: req.body.currencyCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAmounttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;