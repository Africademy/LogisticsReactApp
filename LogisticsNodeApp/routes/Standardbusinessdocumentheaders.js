const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Standardbusinessdocumentheader = require("../models/Standardbusinessdocumentheader");

router.get("/", verify, async (req, res) => {
  try {
    const Standardbusinessdocumentheaders = await Standardbusinessdocumentheader.find();
    res.json(Standardbusinessdocumentheaders);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const standardbusinessdocumentheader = await Standardbusinessdocumentheader.findById(req.params.id);
    res.json({
        _id: standardbusinessdocumentheader._id,
        HeaderVersion: standardbusinessdocumentheader.HeaderVersion,
        createdAt: standardbusinessdocumentheader.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const standardbusinessdocumentheader = new Standardbusinessdocumentheader ({
        HeaderVersion: req.body.HeaderVersion,
    });
    const savedStandardbusinessdocumentheader = await standardbusinessdocumentheader.save();
    res.status(200).json(savedStandardbusinessdocumentheader);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedStandardbusinessdocumentheader = await Standardbusinessdocumentheader.remove({ _id: req.params.id });
    res.json(removedStandardbusinessdocumentheader);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedStandardbusinessdocumentheader = await Standardbusinessdocumentheader.updateOne(
      { _id: req.params.id },
      {
        $set:{
             HeaderVersion: req.body.HeaderVersion,

        }
      }
    );
    res.json(updatedStandardbusinessdocumentheader);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;