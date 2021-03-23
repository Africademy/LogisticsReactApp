const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Locationspecificinstructions = require("../models/Locationspecificinstructions");

router.get("/", verify, async (req, res) => {
  try {
    const Locationspecificinstructionss = await Locationspecificinstructions.find();
    res.json(Locationspecificinstructionss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const locationspecificinstructions = await Locationspecificinstructions.findById(req.params.id);
    res.json({
        _id: locationspecificinstructions._id,
        languageCode: locationspecificinstructions.languageCode,
        codeListVersion: locationspecificinstructions.codeListVersion,
        createdAt: locationspecificinstructions.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const locationspecificinstructions = new Locationspecificinstructions ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedLocationspecificinstructions = await locationspecificinstructions.save();
    res.status(200).json(savedLocationspecificinstructions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLocationspecificinstructions = await Locationspecificinstructions.remove({ _id: req.params.id });
    res.json(removedLocationspecificinstructions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLocationspecificinstructions = await Locationspecificinstructions.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedLocationspecificinstructions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;