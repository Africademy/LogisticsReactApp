const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Entityidentificationtype = require("../models/Entityidentificationtype");
const Partyidentificationtype= require("../models/Partyidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Entityidentificationtypes = await Entityidentificationtype.find();
    res.json(Entityidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const entityidentificationtype = await Entityidentificationtype.findById(req.params.id);
    res.json({
        _id: entityidentificationtype._id,
        id: entityidentificationtype.id,
        entityIdentification: entityidentificationtype.entityIdentification,
        contentOwner: entityidentificationtype.contentOwner,
        contentOwnerId: entityidentificationtype.contentOwner.Id,
        createdAt: entityidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const contentowners = await Partyidentificationtype.findById(req.body.contentOwnerId);
    const entityidentificationtype = new Entityidentificationtype ({
        id: req.body.id,
        entityIdentification: req.body.entityIdentification,
        contentOwner: req.body.contentOwner,
        contentOwner: [{
          Id: contentowners._id,
          Name: contentowners.id
        }],
    });
    const savedEntityidentificationtype = await entityidentificationtype.save();
    res.status(200).json(savedEntityidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedEntityidentificationtype = await Entityidentificationtype.remove({ _id: req.params.id });
    res.json(removedEntityidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const contentowner = await Partyidentificationtype.findById(req.body.contentOwnerId);
    const updatedEntityidentificationtype = await Entityidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             entityIdentification: req.body.entityIdentification,
             contentOwner: req.body.contentOwner,
             contentOwner: {
              Id: req.body.contentowner.id,
              Name: req.body.contentowner.id
             },

        }
      }
    );
    res.json(updatedEntityidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;