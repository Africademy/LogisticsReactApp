const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Contacttypecode = require("../models/Contacttypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Contacttypecodes = await Contacttypecode.find();
    res.json(Contacttypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const contacttypecode = await Contacttypecode.findById(req.params.id);
    res.json({
        _id: contacttypecode._id,
        codeListVersion: contacttypecode.codeListVersion,
        createdAt: contacttypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const contacttypecode = new Contacttypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedContacttypecode = await contacttypecode.save();
    res.status(200).json(savedContacttypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedContacttypecode = await Contacttypecode.remove({ _id: req.params.id });
    res.json(removedContacttypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedContacttypecode = await Contacttypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedContacttypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;