const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Communicationchannel = require("../models/Communicationchannel");

router.get("/", verify, async (req, res) => {
  try {
    const Communicationchannels = await Communicationchannel.find();
    res.json(Communicationchannels);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const communicationchannel = await Communicationchannel.findById(req.params.id);
    res.json({
        _id: communicationchannel._id,
        communicationValue: communicationchannel.communicationValue,
        communicationChannelName: communicationchannel.communicationChannelName,
        createdAt: communicationchannel.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const communicationchannel = new Communicationchannel ({
        communicationValue: req.body.communicationValue,
        communicationChannelName: req.body.communicationChannelName,
    });
    const savedCommunicationchannel = await communicationchannel.save();
    res.status(200).json(savedCommunicationchannel);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCommunicationchannel = await Communicationchannel.remove({ _id: req.params.id });
    res.json(removedCommunicationchannel);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCommunicationchannel = await Communicationchannel.updateOne(
      { _id: req.params.id },
      {
        $set:{
             communicationValue: req.body.communicationValue,
             communicationChannelName: req.body.communicationChannelName,

        }
      }
    );
    res.json(updatedCommunicationchannel);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;