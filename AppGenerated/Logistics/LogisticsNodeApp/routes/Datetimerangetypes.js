const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Datetimerangetype = require("../models/Datetimerangetype");

router.get("/", verify, async (req, res) => {
  try {
    const Datetimerangetypes = await Datetimerangetype.find();
    res.json(Datetimerangetypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const datetimerangetype = await Datetimerangetype.findById(req.params.id);
    res.json({
        _id: datetimerangetype._id,
        id: datetimerangetype.id,
        beginDate: datetimerangetype.beginDate,
        beginTime: datetimerangetype.beginTime,
        endDate: datetimerangetype.endDate,
        endTime: datetimerangetype.endTime,
        createdAt: datetimerangetype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const datetimerangetype = new Datetimerangetype ({
        id: req.body.id,
        beginDate: req.body.beginDate,
        beginTime: req.body.beginTime,
        endDate: req.body.endDate,
        endTime: req.body.endTime,
    });
    const savedDatetimerangetype = await datetimerangetype.save();
    res.status(200).json(savedDatetimerangetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDatetimerangetype = await Datetimerangetype.remove({ _id: req.params.id });
    res.json(removedDatetimerangetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDatetimerangetype = await Datetimerangetype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             beginDate: req.body.beginDate,
             beginTime: req.body.beginTime,
             endDate: req.body.endDate,
             endTime: req.body.endTime,

        }
      }
    );
    res.json(updatedDatetimerangetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;