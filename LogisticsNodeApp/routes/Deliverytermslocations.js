const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Deliverytermslocation = require("../models/Deliverytermslocation");

router.get("/", verify, async (req, res) => {
  try {
    const Deliverytermslocations = await Deliverytermslocation.find();
    res.json(Deliverytermslocations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const deliverytermslocation = await Deliverytermslocation.findById(req.params.id);
    res.json({
        _id: deliverytermslocation._id,
        gln: deliverytermslocation.gln,
        sublocationIdentification: deliverytermslocation.sublocationIdentification,
        locationName: deliverytermslocation.locationName,
        utcOffset: deliverytermslocation.utcOffset,
        createdAt: deliverytermslocation.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const deliverytermslocation = new Deliverytermslocation ({
        gln: req.body.gln,
        sublocationIdentification: req.body.sublocationIdentification,
        locationName: req.body.locationName,
        utcOffset: req.body.utcOffset,
    });
    const savedDeliverytermslocation = await deliverytermslocation.save();
    res.status(200).json(savedDeliverytermslocation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDeliverytermslocation = await Deliverytermslocation.remove({ _id: req.params.id });
    res.json(removedDeliverytermslocation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDeliverytermslocation = await Deliverytermslocation.updateOne(
      { _id: req.params.id },
      {
        $set:{
             gln: req.body.gln,
             sublocationIdentification: req.body.sublocationIdentification,
             locationName: req.body.locationName,
             utcOffset: req.body.utcOffset,

        }
      }
    );
    res.json(updatedDeliverytermslocation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;