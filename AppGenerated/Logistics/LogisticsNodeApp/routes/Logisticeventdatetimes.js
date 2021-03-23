const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticeventdatetime = require("../models/Logisticeventdatetime");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticeventdatetimes = await Logisticeventdatetime.find();
    res.json(Logisticeventdatetimes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticeventdatetime = await Logisticeventdatetime.findById(req.params.id);
    res.json({
        _id: logisticeventdatetime._id,
        date: logisticeventdatetime.date,
        time: logisticeventdatetime.time,
        createdAt: logisticeventdatetime.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const logisticeventdatetime = new Logisticeventdatetime ({
        date: req.body.date,
        time: req.body.time,
    });
    const savedLogisticeventdatetime = await logisticeventdatetime.save();
    res.status(200).json(savedLogisticeventdatetime);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticeventdatetime = await Logisticeventdatetime.remove({ _id: req.params.id });
    res.json(removedLogisticeventdatetime);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLogisticeventdatetime = await Logisticeventdatetime.updateOne(
      { _id: req.params.id },
      {
        $set:{
             date: req.body.date,
             time: req.body.time,

        }
      }
    );
    res.json(updatedLogisticeventdatetime);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;