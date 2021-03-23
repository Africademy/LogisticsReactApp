const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Businessservice = require("../models/Businessservice");

router.get("/", verify, async (req, res) => {
  try {
    const Businessservices = await Businessservice.find();
    res.json(Businessservices);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const businessservice = await Businessservice.findById(req.params.id);
    res.json({
        _id: businessservice._id,
        BusinessServiceName: businessservice.BusinessServiceName,
        createdAt: businessservice.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const businessservice = new Businessservice ({
        BusinessServiceName: req.body.BusinessServiceName,
    });
    const savedBusinessservice = await businessservice.save();
    res.status(200).json(savedBusinessservice);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedBusinessservice = await Businessservice.remove({ _id: req.params.id });
    res.json(removedBusinessservice);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedBusinessservice = await Businessservice.updateOne(
      { _id: req.params.id },
      {
        $set:{
             BusinessServiceName: req.body.BusinessServiceName,

        }
      }
    );
    res.json(updatedBusinessservice);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;