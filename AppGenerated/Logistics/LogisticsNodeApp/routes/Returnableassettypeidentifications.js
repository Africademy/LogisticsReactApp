const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Returnableassettypeidentification = require("../models/Returnableassettypeidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Returnableassettypeidentifications = await Returnableassettypeidentification.find();
    res.json(Returnableassettypeidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const returnableassettypeidentification = await Returnableassettypeidentification.findById(req.params.id);
    res.json({
        _id: returnableassettypeidentification._id,
        grai: returnableassettypeidentification.grai,
        createdAt: returnableassettypeidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const returnableassettypeidentification = new Returnableassettypeidentification ({
        grai: req.body.grai,
    });
    const savedReturnableassettypeidentification = await returnableassettypeidentification.save();
    res.status(200).json(savedReturnableassettypeidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedReturnableassettypeidentification = await Returnableassettypeidentification.remove({ _id: req.params.id });
    res.json(removedReturnableassettypeidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedReturnableassettypeidentification = await Returnableassettypeidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             grai: req.body.grai,

        }
      }
    );
    res.json(updatedReturnableassettypeidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;