const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Cargotypecode = require("../models/Cargotypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Cargotypecodes = await Cargotypecode.find();
    res.json(Cargotypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const cargotypecode = await Cargotypecode.findById(req.params.id);
    res.json({
        _id: cargotypecode._id,
        codeListVersion: cargotypecode.codeListVersion,
        createdAt: cargotypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const cargotypecode = new Cargotypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedCargotypecode = await cargotypecode.save();
    res.status(200).json(savedCargotypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCargotypecode = await Cargotypecode.remove({ _id: req.params.id });
    res.json(removedCargotypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCargotypecode = await Cargotypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedCargotypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;