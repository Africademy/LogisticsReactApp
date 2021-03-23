const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Totalloadinglength = require("../models/Totalloadinglength");

router.get("/", verify, async (req, res) => {
  try {
    const Totalloadinglengths = await Totalloadinglength.find();
    res.json(Totalloadinglengths);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const totalloadinglength = await Totalloadinglength.findById(req.params.id);
    res.json({
        _id: totalloadinglength._id,
        measurementUnitCode: totalloadinglength.measurementUnitCode,
        codeListVersion: totalloadinglength.codeListVersion,
        createdAt: totalloadinglength.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const totalloadinglength = new Totalloadinglength ({
        measurementUnitCode: req.body.measurementUnitCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedTotalloadinglength = await totalloadinglength.save();
    res.status(200).json(savedTotalloadinglength);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTotalloadinglength = await Totalloadinglength.remove({ _id: req.params.id });
    res.json(removedTotalloadinglength);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTotalloadinglength = await Totalloadinglength.updateOne(
      { _id: req.params.id },
      {
        $set:{
             measurementUnitCode: req.body.measurementUnitCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTotalloadinglength);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;