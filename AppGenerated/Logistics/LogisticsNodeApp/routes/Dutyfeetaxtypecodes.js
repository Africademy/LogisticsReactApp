const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dutyfeetaxtypecode = require("../models/Dutyfeetaxtypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Dutyfeetaxtypecodes = await Dutyfeetaxtypecode.find();
    res.json(Dutyfeetaxtypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dutyfeetaxtypecode = await Dutyfeetaxtypecode.findById(req.params.id);
    res.json({
        _id: dutyfeetaxtypecode._id,
        codeListVersion: dutyfeetaxtypecode.codeListVersion,
        createdAt: dutyfeetaxtypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dutyfeetaxtypecode = new Dutyfeetaxtypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedDutyfeetaxtypecode = await dutyfeetaxtypecode.save();
    res.status(200).json(savedDutyfeetaxtypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDutyfeetaxtypecode = await Dutyfeetaxtypecode.remove({ _id: req.params.id });
    res.json(removedDutyfeetaxtypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDutyfeetaxtypecode = await Dutyfeetaxtypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDutyfeetaxtypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;