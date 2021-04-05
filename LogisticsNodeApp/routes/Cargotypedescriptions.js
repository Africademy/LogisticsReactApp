const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Cargotypedescription = require("../models/Cargotypedescription");

router.get("/", verify, async (req, res) => {
  try {
    const Cargotypedescriptions = await Cargotypedescription.find();
    res.json(Cargotypedescriptions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const cargotypedescription = await Cargotypedescription.findById(req.params.id);
    res.json({
        _id: cargotypedescription._id,
        languageCode: cargotypedescription.languageCode,
        codeListVersion: cargotypedescription.codeListVersion,
        createdAt: cargotypedescription.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const cargotypedescription = new Cargotypedescription ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedCargotypedescription = await cargotypedescription.save();
    res.status(200).json(savedCargotypedescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCargotypedescription = await Cargotypedescription.remove({ _id: req.params.id });
    res.json(removedCargotypedescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCargotypedescription = await Cargotypedescription.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedCargotypedescription);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;