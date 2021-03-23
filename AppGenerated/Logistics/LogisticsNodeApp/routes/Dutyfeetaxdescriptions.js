const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dutyfeetaxdescription = require("../models/Dutyfeetaxdescription");

router.get("/", verify, async (req, res) => {
  try {
    const Dutyfeetaxdescriptions = await Dutyfeetaxdescription.find();
    res.json(Dutyfeetaxdescriptions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dutyfeetaxdescription = await Dutyfeetaxdescription.findById(req.params.id);
    res.json({
        _id: dutyfeetaxdescription._id,
        languageCode: dutyfeetaxdescription.languageCode,
        codeListVersion: dutyfeetaxdescription.codeListVersion,
        createdAt: dutyfeetaxdescription.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dutyfeetaxdescription = new Dutyfeetaxdescription ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDutyfeetaxdescription = await dutyfeetaxdescription.save();
    res.status(200).json(savedDutyfeetaxdescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDutyfeetaxdescription = await Dutyfeetaxdescription.remove({ _id: req.params.id });
    res.json(removedDutyfeetaxdescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDutyfeetaxdescription = await Dutyfeetaxdescription.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDutyfeetaxdescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;