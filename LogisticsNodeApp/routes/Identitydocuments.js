const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Identitydocument = require("../models/Identitydocument");

router.get("/", verify, async (req, res) => {
  try {
    const Identitydocuments = await Identitydocument.find();
    res.json(Identitydocuments);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const identitydocument = await Identitydocument.findById(req.params.id);
    res.json({
        _id: identitydocument._id,
        identityDocumentNumber: identitydocument.identityDocumentNumber,
        identityDocumentIssuer: identitydocument.identityDocumentIssuer,
        createdAt: identitydocument.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const identitydocument = new Identitydocument ({
        identityDocumentNumber: req.body.identityDocumentNumber,
        identityDocumentIssuer: req.body.identityDocumentIssuer,
    });
    const savedIdentitydocument = await identitydocument.save();
    res.status(200).json(savedIdentitydocument);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIdentitydocument = await Identitydocument.remove({ _id: req.params.id });
    res.json(removedIdentitydocument);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedIdentitydocument = await Identitydocument.updateOne(
      { _id: req.params.id },
      {
        $set:{
             identityDocumentNumber: req.body.identityDocumentNumber,
             identityDocumentIssuer: req.body.identityDocumentIssuer,

        }
      }
    );
    res.json(updatedIdentitydocument);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;