const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Packagetypecode = require("../models/Packagetypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Packagetypecodes = await Packagetypecode.find();
    res.json(Packagetypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const packagetypecode = await Packagetypecode.findById(req.params.id);
    res.json({
        _id: packagetypecode._id,
        codeListVersion: packagetypecode.codeListVersion,
        createdAt: packagetypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const packagetypecode = new Packagetypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedPackagetypecode = await packagetypecode.save();
    res.status(200).json(savedPackagetypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPackagetypecode = await Packagetypecode.remove({ _id: req.params.id });
    res.json(removedPackagetypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedPackagetypecode = await Packagetypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedPackagetypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;