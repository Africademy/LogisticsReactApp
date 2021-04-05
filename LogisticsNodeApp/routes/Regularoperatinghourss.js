const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Regularoperatinghours = require("../models/Regularoperatinghours");

router.get("/", verify, async (req, res) => {
  try {
    const Regularoperatinghourss = await Regularoperatinghours.find();
    res.json(Regularoperatinghourss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const regularoperatinghours = await Regularoperatinghours.findById(req.params.id);
    res.json({
        _id: regularoperatinghours._id,
        dayOfTheWeekCode: regularoperatinghours.dayOfTheWeekCode,
        isOperational: regularoperatinghours.isOperational,
        closingTime: regularoperatinghours.closingTime,
        openingTime: regularoperatinghours.openingTime,
        createdAt: regularoperatinghours.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const regularoperatinghours = new Regularoperatinghours ({
        dayOfTheWeekCode: req.body.dayOfTheWeekCode,
        isOperational: req.body.isOperational,
        closingTime: req.body.closingTime,
        openingTime: req.body.openingTime,
    });
    const savedRegularoperatinghours = await regularoperatinghours.save();
    res.status(200).json(savedRegularoperatinghours);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedRegularoperatinghours = await Regularoperatinghours.remove({ _id: req.params.id });
    res.json(removedRegularoperatinghours);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedRegularoperatinghours = await Regularoperatinghours.updateOne(
      { _id: req.params.id },
      {
        $set:{
             dayOfTheWeekCode: req.body.dayOfTheWeekCode,
             isOperational: req.body.isOperational,
             closingTime: req.body.closingTime,
             openingTime: req.body.openingTime,

        }
      }
    );
    res.json(updatedRegularoperatinghours);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;