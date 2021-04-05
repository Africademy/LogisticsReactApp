const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportreferencetypecode = require("../models/Transportreferencetypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Transportreferencetypecodes = await Transportreferencetypecode.find();
    res.json(Transportreferencetypecodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportreferencetypecode = await Transportreferencetypecode.findById(req.params.id);
    res.json({
        _id: transportreferencetypecode._id,
        codeListVersion: transportreferencetypecode.codeListVersion,
        createdAt: transportreferencetypecode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportreferencetypecode = new Transportreferencetypecode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedTransportreferencetypecode = await transportreferencetypecode.save();
    res.status(200).json(savedTransportreferencetypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportreferencetypecode = await Transportreferencetypecode.remove({ _id: req.params.id });
    res.json(removedTransportreferencetypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportreferencetypecode = await Transportreferencetypecode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedTransportreferencetypecode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;