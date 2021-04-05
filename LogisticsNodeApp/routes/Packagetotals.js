const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Packagetotal = require("../models/Packagetotal");

router.get("/", verify, async (req, res) => {
  try {
    const Packagetotals = await Packagetotal.find();
    res.json(Packagetotals);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const packagetotal = await Packagetotal.findById(req.params.id);
    res.json({
        _id: packagetotal._id,
        totalPackageQuantity: packagetotal.totalPackageQuantity,
        createdAt: packagetotal.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const packagetotal = new Packagetotal ({
        totalPackageQuantity: req.body.totalPackageQuantity,
    });
    const savedPackagetotal = await packagetotal.save();
    res.status(200).json(savedPackagetotal);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPackagetotal = await Packagetotal.remove({ _id: req.params.id });
    res.json(removedPackagetotal);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedPackagetotal = await Packagetotal.updateOne(
      { _id: req.params.id },
      {
        $set:{
             totalPackageQuantity: req.body.totalPackageQuantity,

        }
      }
    );
    res.json(updatedPackagetotal);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;