const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Individualreturnableassetidentification = require("../models/Individualreturnableassetidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Individualreturnableassetidentifications = await Individualreturnableassetidentification.find();
    res.json(Individualreturnableassetidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const individualreturnableassetidentification = await Individualreturnableassetidentification.findById(req.params.id);
    res.json({
        _id: individualreturnableassetidentification._id,
        grai: individualreturnableassetidentification.grai,
        createdAt: individualreturnableassetidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const individualreturnableassetidentification = new Individualreturnableassetidentification ({
        grai: req.body.grai,
    });
    const savedIndividualreturnableassetidentification = await individualreturnableassetidentification.save();
    res.status(200).json(savedIndividualreturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIndividualreturnableassetidentification = await Individualreturnableassetidentification.remove({ _id: req.params.id });
    res.json(removedIndividualreturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedIndividualreturnableassetidentification = await Individualreturnableassetidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             grai: req.body.grai,

        }
      }
    );
    res.json(updatedIndividualreturnableassetidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;