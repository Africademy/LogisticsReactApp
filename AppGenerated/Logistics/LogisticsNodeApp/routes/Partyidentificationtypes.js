const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Partyidentificationtype = require("../models/Partyidentificationtype");
const Additionalpartyidentificationtype= require("../models/Additionalpartyidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Partyidentificationtypes = await Partyidentificationtype.find();
    res.json(Partyidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const partyidentificationtype = await Partyidentificationtype.findById(req.params.id);
    res.json({
        _id: partyidentificationtype._id,
        id: partyidentificationtype.id,
        gln: partyidentificationtype.gln,
        additionalPartyIdentification: partyidentificationtype.additionalPartyIdentification,
        additionalPartyIdentificationId: partyidentificationtype.additionalPartyIdentification.Id,
        createdAt: partyidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalpartyidentifications = await Additionalpartyidentificationtype.findById(req.body.additionalPartyIdentificationId);
    const partyidentificationtype = new Partyidentificationtype ({
        id: req.body.id,
        gln: req.body.gln,
        additionalPartyIdentification: req.body.additionalPartyIdentification,
        additionalPartyIdentification: [{
          Id: additionalpartyidentifications._id,
          Name: additionalpartyidentifications.id
        }],
    });
    const savedPartyidentificationtype = await partyidentificationtype.save();
    res.status(200).json(savedPartyidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPartyidentificationtype = await Partyidentificationtype.remove({ _id: req.params.id });
    res.json(removedPartyidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const additionalpartyidentification = await Additionalpartyidentificationtype.findById(req.body.additionalPartyIdentificationId);
    const updatedPartyidentificationtype = await Partyidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             gln: req.body.gln,
             additionalPartyIdentification: req.body.additionalPartyIdentification,
             additionalPartyIdentification: {
              Id: req.body.additionalpartyidentification.id,
              Name: req.body.additionalpartyidentification.id
             },

        }
      }
    );
    res.json(updatedPartyidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;