const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Multidescription70type = require("../models/Multidescription70type");

router.get("/", verify, async (req, res) => {
  try {
    const Multidescription70types = await Multidescription70type.find();
    res.json(Multidescription70types);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const multidescription70type = await Multidescription70type.findById(req.params.id);
    res.json({
        _id: multidescription70type._id,
        id: multidescription70type.id,
        description: multidescription70type.description,
        descriptionId: multidescription70type.description.Id,
        createdAt: multidescription70type.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const descriptions = await Description70type.findById(req.body.descriptionId);
    const multidescription70type = new Multidescription70type ({
        id: req.body.id,
        description: req.body.description,
        description: [{
          Id: descriptions._id,
          Name: descriptions.id
        }],
    });
    const savedMultidescription70type = await multidescription70type.save();
    res.status(200).json(savedMultidescription70type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedMultidescription70type = await Multidescription70type.remove({ _id: req.params.id });
    res.json(removedMultidescription70type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const description = await Description70type.findById(req.body.descriptionId);
    const updatedMultidescription70type = await Multidescription70type.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             description: req.body.description,
             description: {
              Id: req.body.description.id,
              Name: req.body.description.id
             },

        }
      }
    );
    res.json(updatedMultidescription70type);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;