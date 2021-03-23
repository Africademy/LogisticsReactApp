const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dimensiontype = require("../models/Dimensiontype");

router.get("/", verify, async (req, res) => {
  try {
    const Dimensiontypes = await Dimensiontype.find();
    res.json(Dimensiontypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dimensiontype = await Dimensiontype.findById(req.params.id);
    res.json({
        _id: dimensiontype._id,
        id: dimensiontype.id,
        depth: dimensiontype.depth,
        height: dimensiontype.height,
        width: dimensiontype.width,
        depthId: dimensiontype.depth.Id,
        heightId: dimensiontype.height.Id,
        widthId: dimensiontype.width.Id,
        createdAt: dimensiontype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const depths = await Measurementtype.findById(req.body.depthId);
    const heights = await Measurementtype.findById(req.body.heightId);
    const widths = await Measurementtype.findById(req.body.widthId);
    const dimensiontype = new Dimensiontype ({
        id: req.body.id,
        depth: req.body.depth,
        height: req.body.height,
        width: req.body.width,
        depth: [{
          Id: depths._id,
          Name: depths.id
        }],
        height: [{
          Id: heights._id,
          Name: heights.id
        }],
        width: [{
          Id: widths._id,
          Name: widths.id
        }],
    });
    const savedDimensiontype = await dimensiontype.save();
    res.status(200).json(savedDimensiontype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDimensiontype = await Dimensiontype.remove({ _id: req.params.id });
    res.json(removedDimensiontype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const depth = await Measurementtype.findById(req.body.depthId);
    const updatedDimensiontype = await Dimensiontype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             depth: req.body.depth,
             height: req.body.height,
             width: req.body.width,
             depth: {
              Id: req.body.depth.id,
              Name: req.body.depth.id
             },
             depth: {
              Id: req.body.depth.id,
              Name: req.body.depth.id
             },
             depth: {
              Id: req.body.depth.id,
              Name: req.body.depth.id
             },

        }
      }
    );
    res.json(updatedDimensiontype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;