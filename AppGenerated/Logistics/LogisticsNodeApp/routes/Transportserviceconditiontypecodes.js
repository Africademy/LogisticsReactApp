const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportserviceconditiontypecode = require("../models/Transportserviceconditiontypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Transportserviceconditiontypecodes = await Transportserviceconditiontypecode.find();
    res.json(Transportserviceconditiontypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportserviceconditiontypecode = await Transportserviceconditiontypecode.findById(req.params.id);
    res.json({
        _id: transportserviceconditiontypecode._id,
        codeListVersion: transportserviceconditiontypecode.codeListVersion,
        createdAt: transportserviceconditiontypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportserviceconditiontypecode = new Transportserviceconditiontypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedTransportserviceconditiontypecode = await transportserviceconditiontypecode.save();
    res.status(200).json(savedTransportserviceconditiontypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportserviceconditiontypecode = await Transportserviceconditiontypecode.remove({ _id: req.params.id });
    res.json(removedTransportserviceconditiontypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportserviceconditiontypecode = await Transportserviceconditiontypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTransportserviceconditiontypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;