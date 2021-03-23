const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Totalitemquantity = require("../models/Totalitemquantity");

router.get("/", verify, async (req, res) => {
  try {
    const Totalitemquantitys = await Totalitemquantity.find();
    res.json(Totalitemquantitys);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const totalitemquantity = await Totalitemquantity.findById(req.params.id);
    res.json({
        _id: totalitemquantity._id,
        measurementUnitCode: totalitemquantity.measurementUnitCode,
        codeListVersion: totalitemquantity.codeListVersion,
        createdAt: totalitemquantity.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const totalitemquantity = new Totalitemquantity ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTotalitemquantity = await totalitemquantity.save();
    res.status(200).json(savedTotalitemquantity);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTotalitemquantity = await Totalitemquantity.remove({ _id: req.params.id });
    res.json(removedTotalitemquantity);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTotalitemquantity = await Totalitemquantity.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTotalitemquantity);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;