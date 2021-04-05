const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dateoptionaltimetype = require("../models/Dateoptionaltimetype");

router.get("/", verify, async (req, res) => {
  try {
    const Dateoptionaltimetypes = await Dateoptionaltimetype.find();
    res.json(Dateoptionaltimetypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dateoptionaltimetype = await Dateoptionaltimetype.findById(req.params.id);
    res.json({
        _id: dateoptionaltimetype._id,
        id: dateoptionaltimetype.id,
        date: dateoptionaltimetype.date,
        time: dateoptionaltimetype.time,
        createdAt: dateoptionaltimetype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dateoptionaltimetype = new Dateoptionaltimetype ({
        id: req.body.id,
        date: req.body.date,
        time: req.body.time,
    });
    const savedDateoptionaltimetype = await dateoptionaltimetype.save();
    res.status(200).json(savedDateoptionaltimetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDateoptionaltimetype = await Dateoptionaltimetype.remove({ _id: req.params.id });
    res.json(removedDateoptionaltimetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDateoptionaltimetype = await Dateoptionaltimetype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             date: req.body.date,
             time: req.body.time,

        }
      }
    );
    res.json(updatedDateoptionaltimetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;