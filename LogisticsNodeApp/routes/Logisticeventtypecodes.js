const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticeventtypecode = require("../models/Logisticeventtypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticeventtypecodes = await Logisticeventtypecode.find();
    res.json(Logisticeventtypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticeventtypecode = await Logisticeventtypecode.findById(req.params.id);
    res.json({
        _id: logisticeventtypecode._id,
        codeListVersion: logisticeventtypecode.codeListVersion,
        createdAt: logisticeventtypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const logisticeventtypecode = new Logisticeventtypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedLogisticeventtypecode = await logisticeventtypecode.save();
    res.status(200).json(savedLogisticeventtypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticeventtypecode = await Logisticeventtypecode.remove({ _id: req.params.id });
    res.json(removedLogisticeventtypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLogisticeventtypecode = await Logisticeventtypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedLogisticeventtypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;