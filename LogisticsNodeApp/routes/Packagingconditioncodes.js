const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Packagingconditioncode = require("../models/Packagingconditioncode");

router.get("/", verify, async (req, res) => {
  try {
    const Packagingconditioncodes = await Packagingconditioncode.find();
    res.json(Packagingconditioncodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const packagingconditioncode = await Packagingconditioncode.findById(req.params.id);
    res.json({
        _id: packagingconditioncode._id,
        codeListVersion: packagingconditioncode.codeListVersion,
        createdAt: packagingconditioncode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const packagingconditioncode = new Packagingconditioncode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedPackagingconditioncode = await packagingconditioncode.save();
    res.status(200).json(savedPackagingconditioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPackagingconditioncode = await Packagingconditioncode.remove({ _id: req.params.id });
    res.json(removedPackagingconditioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedPackagingconditioncode = await Packagingconditioncode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedPackagingconditioncode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;