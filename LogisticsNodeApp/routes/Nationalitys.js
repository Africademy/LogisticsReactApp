const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Nationality = require("../models/Nationality");

router.get("/", verify, async (req, res) => {
  try {
    const Nationalitys = await Nationality.find();
    res.json(Nationalitys);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const nationality = await Nationality.findById(req.params.id);
    res.json({
        _id: nationality._id,
        codeListVersion: nationality.codeListVersion,
        createdAt: nationality.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const nationality = new Nationality ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedNationality = await nationality.save();
    res.status(200).json(savedNationality);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedNationality = await Nationality.remove({ _id: req.params.id });
    res.json(removedNationality);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedNationality = await Nationality.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedNationality);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;