const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Communicationchanneltype = require("../models/Communicationchanneltype");
const Enumerationlibrary= require("../models/Enumerationlibrary");

router.get("/", verify, async (req, res) => {
  try {
    const Communicationchanneltypes = await Communicationchanneltype.find();
    res.json(Communicationchanneltypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const communicationchanneltype = await Communicationchanneltype.findById(req.params.id);
    res.json({
        _id: communicationchanneltype._id,
        id: communicationchanneltype.id,
        communicationChannelCode: communicationchanneltype.communicationChannelCode,
        communicationValue: communicationchanneltype.communicationValue,
        communicationChannelName: communicationchanneltype.communicationChannelName,
        communicationChannelCodeId: communicationchanneltype.communicationChannelCode.Id,
        createdAt: communicationchanneltype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const communicationchannelcodes = await Enumerationlibrary.findById(req.body.communicationChannelCodeId);
    const communicationchanneltype = new Communicationchanneltype ({
        id: req.body.id,
        communicationChannelCode: req.body.communicationChannelCode,
        communicationValue: req.body.communicationValue,
        communicationChannelName: req.body.communicationChannelName,
        communicationChannelCode: [{
          Id: communicationchannelcodes._id,
          Name: communicationchannelcodes.id
        }],
    });
    const savedCommunicationchanneltype = await communicationchanneltype.save();
    res.status(200).json(savedCommunicationchanneltype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCommunicationchanneltype = await Communicationchanneltype.remove({ _id: req.params.id });
    res.json(removedCommunicationchanneltype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const communicationchannelcode = await Enumerationlibrary.findById(req.body.communicationChannelCodeId);
    const updatedCommunicationchanneltype = await Communicationchanneltype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             communicationChannelCode: req.body.communicationChannelCode,
             communicationValue: req.body.communicationValue,
             communicationChannelName: req.body.communicationChannelName,
             communicationChannelCode: {
              Id: req.body.communicationchannelcode.id,
              Name: req.body.communicationchannelcode.id
             },

        }
      }
    );
    res.json(updatedCommunicationchanneltype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;