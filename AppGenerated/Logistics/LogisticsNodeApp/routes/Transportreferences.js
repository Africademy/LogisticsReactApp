const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportreference = require("../models/Transportreference");

router.get("/", verify, async (req, res) => {
  try {
    const Transportreferences = await Transportreference.find();
    res.json(Transportreferences);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportreference = await Transportreference.findById(req.params.id);
    res.json({
        _id: transportreference._id,
        entityIdentification: transportreference.entityIdentification,
        creationDateTime: transportreference.creationDateTime,
        revisionNumber: transportreference.revisionNumber,
        lineItemNumber: transportreference.lineItemNumber,
        createdAt: transportreference.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportreference = new Transportreference ({
        entityIdentification: req.body.entityIdentification,
        creationDateTime: req.body.creationDateTime,
        revisionNumber: req.body.revisionNumber,
        lineItemNumber: req.body.lineItemNumber,
    });
    const savedTransportreference = await transportreference.save();
    res.status(200).json(savedTransportreference);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportreference = await Transportreference.remove({ _id: req.params.id });
    res.json(removedTransportreference);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportreference = await Transportreference.updateOne(
      { _id: req.params.id },
      {
        $set:{
             entityIdentification: req.body.entityIdentification,
             creationDateTime: req.body.creationDateTime,
             revisionNumber: req.body.revisionNumber,
             lineItemNumber: req.body.lineItemNumber,

        }
      }
    );
    res.json(updatedTransportreference);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;