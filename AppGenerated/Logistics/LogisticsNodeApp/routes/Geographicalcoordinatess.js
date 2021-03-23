const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Geographicalcoordinates = require("../models/Geographicalcoordinates");

router.get("/", verify, async (req, res) => {
  try {
    const Geographicalcoordinatess = await Geographicalcoordinates.find();
    res.json(Geographicalcoordinatess);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const geographicalcoordinates = await Geographicalcoordinates.findById(req.params.id);
    res.json({
        _id: geographicalcoordinates._id,
        latitude: geographicalcoordinates.latitude,
        longitude: geographicalcoordinates.longitude,
        createdAt: geographicalcoordinates.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const geographicalcoordinates = new Geographicalcoordinates ({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });
    const savedGeographicalcoordinates = await geographicalcoordinates.save();
    res.status(200).json(savedGeographicalcoordinates);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedGeographicalcoordinates = await Geographicalcoordinates.remove({ _id: req.params.id });
    res.json(removedGeographicalcoordinates);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedGeographicalcoordinates = await Geographicalcoordinates.updateOne(
      { _id: req.params.id },
      {
        $set:{
             latitude: req.body.latitude,
             longitude: req.body.longitude,

        }
      }
    );
    res.json(updatedGeographicalcoordinates);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;