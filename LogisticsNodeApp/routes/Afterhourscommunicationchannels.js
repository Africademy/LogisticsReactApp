const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Afterhourscommunicationchannel = require("../models/Afterhourscommunicationchannel");

router.get("/", verify, async (req, res) => {
  try {
    const Afterhourscommunicationchannels = await Afterhourscommunicationchannel.find();
    res.json(Afterhourscommunicationchannels);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const afterhourscommunicationchannel = await Afterhourscommunicationchannel.findById(req.params.id);
    res.json({
        _id: afterhourscommunicationchannel._id,
        communicationValue: afterhourscommunicationchannel.communicationValue,
        communicationChannelName: afterhourscommunicationchannel.communicationChannelName,
        createdAt: afterhourscommunicationchannel.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const afterhourscommunicationchannel = new Afterhourscommunicationchannel ({
        communicationValue: req.body.communicationValue,
        communicationChannelName: req.body.communicationChannelName,
    });
    const savedAfterhourscommunicationchannel = await afterhourscommunicationchannel.save();
    res.status(200).json(savedAfterhourscommunicationchannel);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAfterhourscommunicationchannel = await Afterhourscommunicationchannel.remove({ _id: req.params.id });
    res.json(removedAfterhourscommunicationchannel);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAfterhourscommunicationchannel = await Afterhourscommunicationchannel.updateOne(
      { _id: req.params.id },
      {
        $set:{
             communicationValue: req.body.communicationValue,
             communicationChannelName: req.body.communicationChannelName,

        }
      }
    );
    res.json(updatedAfterhourscommunicationchannel);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;