const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Specialdatename = require("../models/Specialdatename");

router.get("/", verify, async (req, res) => {
  try {
    const Specialdatenames = await Specialdatename.find();
    res.json(Specialdatenames);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const specialdatename = await Specialdatename.findById(req.params.id);
    res.json({
        _id: specialdatename._id,
        languageCode: specialdatename.languageCode,
        codeListVersion: specialdatename.codeListVersion,
        createdAt: specialdatename.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const specialdatename = new Specialdatename ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedSpecialdatename = await specialdatename.save();
    res.status(200).json(savedSpecialdatename);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedSpecialdatename = await Specialdatename.remove({ _id: req.params.id });
    res.json(removedSpecialdatename);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedSpecialdatename = await Specialdatename.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedSpecialdatename);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;