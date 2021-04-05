const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Totalpackagequantity = require("../models/Totalpackagequantity");

router.get("/", verify, async (req, res) => {
  try {
    const Totalpackagequantitys = await Totalpackagequantity.find();
    res.json(Totalpackagequantitys);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const totalpackagequantity = await Totalpackagequantity.findById(req.params.id);
    res.json({
        _id: totalpackagequantity._id,
        measurementUnitCode: totalpackagequantity.measurementUnitCode,
        codeListVersion: totalpackagequantity.codeListVersion,
        createdAt: totalpackagequantity.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const totalpackagequantity = new Totalpackagequantity ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTotalpackagequantity = await totalpackagequantity.save();
    res.status(200).json(savedTotalpackagequantity);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTotalpackagequantity = await Totalpackagequantity.remove({ _id: req.params.id });
    res.json(removedTotalpackagequantity);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTotalpackagequantity = await Totalpackagequantity.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTotalpackagequantity);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;