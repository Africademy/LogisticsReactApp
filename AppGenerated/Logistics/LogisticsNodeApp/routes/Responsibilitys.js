const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Responsibility = require("../models/Responsibility");

router.get("/", verify, async (req, res) => {
  try {
    const Responsibilitys = await Responsibility.find();
    res.json(Responsibilitys);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const responsibility = await Responsibility.findById(req.params.id);
    res.json({
        _id: responsibility._id,
        languageCode: responsibility.languageCode,
        codeListVersion: responsibility.codeListVersion,
        createdAt: responsibility.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const responsibility = new Responsibility ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedResponsibility = await responsibility.save();
    res.status(200).json(savedResponsibility);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedResponsibility = await Responsibility.remove({ _id: req.params.id });
    res.json(removedResponsibility);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedResponsibility = await Responsibility.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedResponsibility);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;