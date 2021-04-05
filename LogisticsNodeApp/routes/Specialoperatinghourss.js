const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Specialoperatinghours = require("../models/Specialoperatinghours");

router.get("/", verify, async (req, res) => {
  try {
    const Specialoperatinghourss = await Specialoperatinghours.find();
    res.json(Specialoperatinghourss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const specialoperatinghours = await Specialoperatinghours.findById(req.params.id);
    res.json({
        _id: specialoperatinghours._id,
        isOperational: specialoperatinghours.isOperational,
        specialDate: specialoperatinghours.specialDate,
        closingTime: specialoperatinghours.closingTime,
        openingTime: specialoperatinghours.openingTime,
        createdAt: specialoperatinghours.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const specialoperatinghours = new Specialoperatinghours ({
        isOperational: req.body.isOperational,
        specialDate: req.body.specialDate,
        closingTime: req.body.closingTime,
        openingTime: req.body.openingTime,
    });
    const savedSpecialoperatinghours = await specialoperatinghours.save();
    res.status(200).json(savedSpecialoperatinghours);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedSpecialoperatinghours = await Specialoperatinghours.remove({ _id: req.params.id });
    res.json(removedSpecialoperatinghours);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedSpecialoperatinghours = await Specialoperatinghours.updateOne(
      { _id: req.params.id },
      {
        $set:{
             isOperational: req.body.isOperational,
             specialDate: req.body.specialDate,
             closingTime: req.body.closingTime,
             openingTime: req.body.openingTime,

        }
      }
    );
    res.json(updatedSpecialoperatinghours);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;