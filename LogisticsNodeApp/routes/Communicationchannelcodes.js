const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Communicationchannelcode = require("../models/Communicationchannelcode");

router.get("/", verify, async (req, res) => {
  try {
    const Communicationchannelcodes = await Communicationchannelcode.find();
    res.json(Communicationchannelcodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const communicationchannelcode = await Communicationchannelcode.findById(req.params.id);
    res.json({
        _id: communicationchannelcode._id,
        codeListVersion: communicationchannelcode.codeListVersion,
        createdAt: communicationchannelcode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const communicationchannelcode = new Communicationchannelcode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedCommunicationchannelcode = await communicationchannelcode.save();
    res.status(200).json(savedCommunicationchannelcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCommunicationchannelcode = await Communicationchannelcode.remove({ _id: req.params.id });
    res.json(removedCommunicationchannelcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCommunicationchannelcode = await Communicationchannelcode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedCommunicationchannelcode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;