const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Carrier = require("../models/Carrier");

router.get("/", verify, async (req, res) => {
  try {
    const Carriers = await Carrier.find();
    res.json(Carriers);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const carrier = await Carrier.findById(req.params.id);
    res.json({
        _id: carrier._id,
        gln: carrier.gln,
        createdAt: carrier.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const carrier = new Carrier ({
        gln: req.body.gln,
    });
    const savedCarrier = await carrier.save();
    res.status(200).json(savedCarrier);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCarrier = await Carrier.remove({ _id: req.params.id });
    res.json(removedCarrier);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCarrier = await Carrier.updateOne(
      { _id: req.params.id },
      {
        $set:{
             gln: req.body.gln,

        }
      }
    );
    res.json(updatedCarrier);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;