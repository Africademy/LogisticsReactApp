const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Contactinformation = require("../models/Contactinformation");

router.get("/", verify, async (req, res) => {
  try {
    const Contactinformations = await Contactinformation.find();
    res.json(Contactinformations);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const contactinformation = await Contactinformation.findById(req.params.id);
    res.json({
        _id: contactinformation._id,
        Contact: contactinformation.Contact,
        EmailAddress: contactinformation.EmailAddress,
        FaxNumber: contactinformation.FaxNumber,
        TelephoneNumber: contactinformation.TelephoneNumber,
        ContactTypeIdentifier: contactinformation.ContactTypeIdentifier,
        createdAt: contactinformation.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const contactinformation = new Contactinformation ({
        Contact: req.body.Contact,
        EmailAddress: req.body.EmailAddress,
        FaxNumber: req.body.FaxNumber,
        TelephoneNumber: req.body.TelephoneNumber,
        ContactTypeIdentifier: req.body.ContactTypeIdentifier,
    });
    const savedContactinformation = await contactinformation.save();
    res.status(200).json(savedContactinformation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedContactinformation = await Contactinformation.remove({ _id: req.params.id });
    res.json(removedContactinformation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedContactinformation = await Contactinformation.updateOne(
      { _id: req.params.id },
      {
        $set:{
             Contact: req.body.Contact,
             EmailAddress: req.body.EmailAddress,
             FaxNumber: req.body.FaxNumber,
             TelephoneNumber: req.body.TelephoneNumber,
             ContactTypeIdentifier: req.body.ContactTypeIdentifier,

        }
      }
    );
    res.json(updatedContactinformation);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;