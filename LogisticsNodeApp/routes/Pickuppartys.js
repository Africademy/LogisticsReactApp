const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Pickupparty = require("../models/Pickupparty");

router.get("/", verify, async (req, res) => {
  try {
    const Pickuppartys = await Pickupparty.find();
    res.json(Pickuppartys);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const pickupparty = await Pickupparty.findById(req.params.id);
    res.json({
        _id: pickupparty._id,
        gln: pickupparty.gln,
        createdAt: pickupparty.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const pickupparty = new Pickupparty ({
        gln: req.body.gln,
    });
    const savedPickupparty = await pickupparty.save();
    res.status(200).json(savedPickupparty);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPickupparty = await Pickupparty.remove({ _id: req.params.id });
    res.json(removedPickupparty);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedPickupparty = await Pickupparty.updateOne(
      { _id: req.params.id },
      {
        $set:{
             gln: req.body.gln,

        }
      }
    );
    res.json(updatedPickupparty);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;