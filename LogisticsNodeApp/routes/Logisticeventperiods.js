const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticeventperiod = require("../models/Logisticeventperiod");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticeventperiods = await Logisticeventperiod.find();
    res.json(Logisticeventperiods);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticeventperiod = await Logisticeventperiod.findById(req.params.id);
    res.json({
        _id: logisticeventperiod._id,
        beginDate: logisticeventperiod.beginDate,
        beginTime: logisticeventperiod.beginTime,
        endDate: logisticeventperiod.endDate,
        endTime: logisticeventperiod.endTime,
        createdAt: logisticeventperiod.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const logisticeventperiod = new Logisticeventperiod ({
        beginDate: req.body.beginDate,
        beginTime: req.body.beginTime,
        endDate: req.body.endDate,
        endTime: req.body.endTime,
    });
    const savedLogisticeventperiod = await logisticeventperiod.save();
    res.status(200).json(savedLogisticeventperiod);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticeventperiod = await Logisticeventperiod.remove({ _id: req.params.id });
    res.json(removedLogisticeventperiod);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLogisticeventperiod = await Logisticeventperiod.updateOne(
      { _id: req.params.id },
      {
        $set:{
             beginDate: req.body.beginDate,
             beginTime: req.body.beginTime,
             endDate: req.body.endDate,
             endTime: req.body.endTime,

        }
      }
    );
    res.json(updatedLogisticeventperiod);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;