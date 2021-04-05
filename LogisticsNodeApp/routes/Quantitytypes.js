const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Quantitytype = require("../models/Quantitytype");

router.get("/", verify, async (req, res) => {
  try {
    const Quantitytypes = await Quantitytype.find();
    res.json(Quantitytypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const quantitytype = await Quantitytype.findById(req.params.id);
    res.json({
        _id: quantitytype._id,
        id: quantitytype.id,
        measurementUnitCode: quantitytype.measurementUnitCode,
        codeListVersion: quantitytype.codeListVersion,
        createdAt: quantitytype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const quantitytype = new Quantitytype ({
        id: req.body.id,
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedQuantitytype = await quantitytype.save();
    res.status(200).json(savedQuantitytype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedQuantitytype = await Quantitytype.remove({ _id: req.params.id });
    res.json(removedQuantitytype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedQuantitytype = await Quantitytype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedQuantitytype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;