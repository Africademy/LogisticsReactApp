const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Manifest = require("../models/Manifest");

router.get("/", verify, async (req, res) => {
  try {
    const Manifests = await Manifest.find();
    res.json(Manifests);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const manifest = await Manifest.findById(req.params.id);
    res.json({
        _id: manifest._id,
        NumberOfItems: manifest.NumberOfItems,
        createdAt: manifest.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const manifest = new Manifest ({
        NumberOfItems: req.body.NumberOfItems,
    });
    const savedManifest = await manifest.save();
    res.status(200).json(savedManifest);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedManifest = await Manifest.remove({ _id: req.params.id });
    res.json(removedManifest);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedManifest = await Manifest.updateOne(
      { _id: req.params.id },
      {
        $set:{
             NumberOfItems: req.body.NumberOfItems,

        }
      }
    );
    res.json(updatedManifest);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;